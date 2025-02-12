const babelPluginJsxToMettle = require('babel-plugin-jsx-to-mettle');
const babelPluginMettle = require('babel-plugin-mettle');

module.exports = function () {
  const plugins = [[babelPluginJsxToMettle], [babelPluginMettle]];

  return {
    plugins,
  };
};
