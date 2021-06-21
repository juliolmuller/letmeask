module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'next',
    'lacussoft',
    'lacussoft/react',
    'lacussoft/typescript',
    'next/core-web-vitals',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
  },
}
