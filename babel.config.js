module.exports = api => {
  api.cache(true);
  const modules = [
    'core-ui',
    'assets',
    'components',
    'constants',
    'screens',
    'redux',
    'navigation',
    'config',
    'helpers',
  ];

  const alias = modules.reduce(
    (aliasAcc, moduleName) => {
      aliasAcc[`@app/${moduleName}`] = `./src/${moduleName}`;
      return aliasAcc;
    },
    {
      // explicitly add redux to avoid conflict with local redux folder's package.json
      redux: './node_modules/redux',
    },
  );

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias,
        },
      ],
    ],
  };
};
