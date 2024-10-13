import js from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,vue}"],
    languageOptions: {
      parser: eslintPluginVue.parser,
    },
    rules: {
      // Add your custom rules here
      "vue/multi-word-component-names": "off",
      // For example:
      // 'vue/no-unused-vars': 'error',
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
