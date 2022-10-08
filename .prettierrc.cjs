module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
      {
        files: '*.astro, *.scss',
        options: {
          parser: 'astro',
        },
      },
    ]
  };