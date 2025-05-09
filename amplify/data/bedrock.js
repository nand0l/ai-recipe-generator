export function request(ctx) {
  const { 
    ingredients = [], 
    language = 'nl',
    measurementSystem = 'eu'
  } = ctx.args;

  const measurementDetails = measurementSystem === 'eu' 
    ? 'European measurements (grams, kilograms, Celsius)' 
    : 'US measurements (ounces, pounds, Fahrenheit)';

  const localizedPrompts = {
    en: (ingredients, measurementDetails) => 
      `Suggest a recipe idea using these ingredients: ${ingredients.join(", ")}.

Please provide the recipe in English language.
Use ${measurementDetails} for all measurements in the recipe.
Include ingredient quantities, cooking times, and temperatures using the specified measurement system.`,

    nl: (ingredients, measurementDetails) => 
      `Stel een recept voor met deze ingrediënten: ${ingredients.join(", ")}.

Gelieve het recept in het Nederlands te geven.
Gebruik ${measurementDetails} voor alle hoeveelheden in het recept.
Voeg hoeveelheden, kooktijden en temperaturen toe volgens het opgegeven meetsysteem.`,

    es: (ingredients, measurementDetails) => 
      `Sugiere una receta con estos ingredientes: ${ingredients.join(", ")}.

Proporcione la receta en idioma español.
Utilice ${measurementDetails} para todas las medidas en la receta.
Incluya cantidades, tiempos de cocción y temperaturas utilizando el sistema de medida especificado.`,

    fr: (ingredients, measurementDetails) => 
      `Suggérez une idée de recette avec ces ingrédients : ${ingredients.join(", ")}.

Veuillez fournir la recette en français.
Utilisez ${measurementDetails} pour toutes les mesures.
Incluez les quantités, les temps de cuisson et les températures selon le système de mesure spécifié.`,

    de: (ingredients, measurementDetails) => 
      `Schlagen Sie eine Rezeptidee mit diesen Zutaten vor: ${ingredients.join(", ")}.

Bitte geben Sie das Rezept auf Deutsch an.
Verwenden Sie ${measurementDetails} für alle Angaben im Rezept.
Fügen Sie Mengenangaben, Kochzeiten und Temperaturen entsprechend dem angegebenen Messsystem hinzu.`,

    it: (ingredients, measurementDetails) => 
      `Suggerisci un'idea di ricetta usando questi ingredienti: ${ingredients.join(", ")}.

Fornisci la ricetta in lingua italiana.
Utilizza ${measurementDetails} per tutte le misurazioni nella ricetta.
Includi le quantità degli ingredienti, i tempi di cottura e le temperature usando il sistema di misurazione specificato.`
  };

  const promptBuilder = localizedPrompts[language] || localizedPrompts['en'];
  const userPrompt = promptBuilder(ingredients, measurementDetails);

  return {
    resourcePath: "/model/amazon.nova-pro-v1:0/invoke",
    method: "POST",
    params: {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        schemaVersion: "messages-v1",
        messages: [
          {
            role: "user",
            content: [{ text: userPrompt }]
          }
        ],
        inferenceConfig: {
          maxTokens: 1000,
          temperature: 0.7,
          topP: 0.9,
          topK: 50
        }
      })
    }
  };
}
