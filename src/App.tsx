import { FormEvent, useState } from "react";
import { Loader, Placeholder, Button } from "@aws-amplify/ui-react";
import "./App.css";
import { Amplify } from "aws-amplify";
import { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import { signOut } from "aws-amplify/auth";
import LanguageSelector from "./components/LanguageSelector";
import "./components/LanguageSelector.css";
import { 
  Language, 
  DEFAULT_LANGUAGE, 
  MEASUREMENT_SYSTEMS
} from "./utils/languageUtils";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});

function App() {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(DEFAULT_LANGUAGE);
  // Always use European measurements (first option in MEASUREMENT_SYSTEMS)
  const europeanMeasurements = MEASUREMENT_SYSTEMS[0];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const formData = new FormData(event.currentTarget);
      const ingredients = formData.get("ingredients")?.toString().trim() || "";

      if (!ingredients) {
        alert("Please enter at least one ingredient.");
        return;
      }

      const { data, errors } = await amplifyClient.queries.askBedrock({
        ingredients: [ingredients],
        language: selectedLanguage.code,
        measurementSystem: europeanMeasurements.code
      });

      if (errors) {
        console.error("GraphQL errors:", errors);
        alert("Something went wrong. Check the console for details.");
      } else {
        setResult(data?.body || "No recipe returned.");
      }
    } catch (e) {
      console.error("Exception:", e);
      alert(`An error occurred: ${(e as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleLogOut = async () => {
    try {
      await signOut();
      window.location.href = "/"; // optional: redirect to home/login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <h1 className="main-header">
          Meet Your Personal
          <br />
          <span className="highlight">Recipe AI</span>
        </h1>
        <p className="description">
          Simply type a few ingredients using the format ingredient1, ingredient2, etc., 
          and Recipe AI will generate an all-new recipe on demand...
        </p>
      </div>

      <form onSubmit={onSubmit} className="form-container">
        <LanguageSelector 
          onLanguageChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
        
        <div className="search-container">
          <input
            type="text"
            className="wide-input"
            id="ingredients"
            name="ingredients"
            placeholder="Ingredient1, Ingredient2, Ingredient3,...etc"
          />
          <button type="submit" className="search-button">
            Generate
          </button>
        </div>

        <div className="logout-container">
          <Button variation="link" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      </form>

      <div className="result-container">
        {loading ? (
          <div className="loader-container">
            <p>Loading...</p>
            <Loader size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
            <Placeholder size="large" />
          </div>
        ) : (
          result && <p className="result">{result}</p>
        )}
      </div>
    </div>
  );
}

export default App;
