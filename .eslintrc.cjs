module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@rocketseat/eslint-config/react",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-octal-escape": 'false',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
