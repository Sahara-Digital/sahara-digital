module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: "module", 
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect" 
    }
  },
  extends: [
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended", 
    "prettier/@typescript-eslint", 
    "plugin:prettier/recommended","react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  },
};