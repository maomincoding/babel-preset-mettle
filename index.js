module.exports = function () {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'mettle-jsx-runtime',
      },
    ],
  ];

  return {
    presets,
  };
};
