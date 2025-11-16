import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["dist", "node_modules"],
  },

  {
    files: ["src/**/*.{js,jsx}"],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: globals.browser,
    },

    plugins: { react },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",

      // Allow JSX components like <App />
      "no-unused-vars": ["off"],
    },
  },
];
