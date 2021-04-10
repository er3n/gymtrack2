module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        'jsx-quotes': 0,
      },
      'prettier/prettier': [
        error,
        {
          endOfLine: 'auto',
        },
      ],
    },
  ],
};
