module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassing": "off",
    camelcase: "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
