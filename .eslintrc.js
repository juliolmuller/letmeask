module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  },
}
