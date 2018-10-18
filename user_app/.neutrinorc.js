module.exports = {
  use: [
    [
      '@neutrinojs/react',
      {
        publicPath: '/',
      },
    ],
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          rules: {
            'react/jsx-filename-extension': 'off',
          },
        },
      },
    ],
  ],
};
