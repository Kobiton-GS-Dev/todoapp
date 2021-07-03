module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "prettier/prettier": [
        "warn",
        {
          "arrowParens": "avoid",
          "semi": false,
          "trailingComma": "none",
          "endOfLine": "lf",
          "tabWidth": 2,
          "printWidth": 80,
          "useTabs": false,
          "singleQuote": true
        }
      ],
      "no-console": "warn"
    }
  ,
};
