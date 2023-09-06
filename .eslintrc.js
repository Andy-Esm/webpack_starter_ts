module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'extends': [
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',

  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true
    }
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
  }
}
