const babelPluginMettle = require('babel-plugin-mettle');

module.exports = function () {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    ['@babel/preset-typescript'],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'mettle-jsx-runtime',
      },
    ],
  ];

  const plugins = [[babelPluginMettle]];

  return {
    presets,
    plugins,
  };
};
