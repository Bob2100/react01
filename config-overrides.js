const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  // antd按需加载
  config = injectBabelPlugin([
    'import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }
  ], config);

  // 添加支持装饰器
  config = injectBabelPlugin(["babel-plugin-transform-decorators-legacy", { legacy: true }], config);
  return config;
}