module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended', // Use the recommended rules from @vue/eslint-plugin-vue
        'eslint:recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint', // Use babel-eslint to parse modern JavaScript
    },
    rules: {
        // Customize your rules here
        'vue/no-unused-vars': 'warn',
        'vue/no-multiple-template-root': 'off', // Example of turning off a rule
    },
};
