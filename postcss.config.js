module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-sort-media-queries')({
      sort: 'desktop-first',
    }),
  ],
};
