import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: [
      "classes/dist/",
      "node_modules/",
      ".config.*"
    ],
    
    rules: {
      "no-unused-vars": 0
    },
    languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
];