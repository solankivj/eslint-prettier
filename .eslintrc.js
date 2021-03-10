module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prettier/prettier": process.env.NODE_ENV === "production" ? "error" : "warn",
  }
}