module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'consistent-return': 'off', // 화살표 함수에 대해
    'no-alert': 'off', // alert창에 대해
    'react/require-default-props': 'off', // default value 설정에 대해
    '@typescript-eslint/no-explicit-any': ['off'],
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'no-console': 'off',
    'prettier/prettier': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        types: {
          '{}': false,
        },
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
};
