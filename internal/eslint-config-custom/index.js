module.exports = {
  extends: ["next", "turbo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "import/no-unresolved": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["examples/*/tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
