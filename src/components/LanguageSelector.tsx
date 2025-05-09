import { useState } from 'react';
import { 
  LANGUAGES, 
  Language
} from '../utils/languageUtils';

interface LanguageSelectorProps {
  onLanguageChange: (language: Language) => void;
  selectedLanguage: Language;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
  selectedLanguage
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (language: Language) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-container">
      <div className="language-dropdown-section">
        <label className="selector-label">Language:</label>
        <div className="language-dropdown">
          <button 
            type="button" 
            className="language-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLanguage.name}
          </button>
          
          {isOpen && (
            <div className="language-dropdown-content">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  className={`language-option ${selectedLanguage.code === language.code ? 'selected' : ''}`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;