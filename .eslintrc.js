module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    rules: {
        semi: 1,
        quotes: [2, 'single'], // jsx use single quotes
        'react/prop-types': 1, // check prop-types exits
        'react/jsx-max-props-per-line': 1, // enter new line prop object
        'react/jsx-uses-vars': 2 // not use var
    }
};