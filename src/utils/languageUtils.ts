// Language and measurement system utilities

// Supported languages
export interface Language {
  code: string;
  name: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
];

// Default language
export const DEFAULT_LANGUAGE: Language = LANGUAGES[0];

// Measurement systems
export interface MeasurementSystem {
  code: string;
  name: string;
  description: string;
}

export const MEASUREMENT_SYSTEMS: MeasurementSystem[] = [
  { 
    code: 'eu', 
    name: 'EU', 
    description: 'European (grams, kilograms, Celsius)' 
  },
  { 
    code: 'us', 
    name: 'US', 
    description: 'US (ounces, pounds, Fahrenheit)' 
  },
];

// Default measurement system (EU as specified in requirements)
export const DEFAULT_MEASUREMENT_SYSTEM: MeasurementSystem = MEASUREMENT_SYSTEMS[0];

// Helper function to get language by code
export const getLanguageByCode = (code: string): Language => {
  return LANGUAGES.find(lang => lang.code === code) || DEFAULT_LANGUAGE;
};

// Helper function to get measurement system by code
export const getMeasurementSystemByCode = (code: string): MeasurementSystem => {
  return MEASUREMENT_SYSTEMS.find(system => system.code === code) || DEFAULT_MEASUREMENT_SYSTEM;
};