module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
      "babel-preset-expo",
      "module:metro-react-native-babel-preset",
    ],
    plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }]],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      }
    }
  };
};