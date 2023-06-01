module.exports = function (api) {
    api.cache(true);
  
    const presets = ["@babel/preset-env","@babel/preset-react"];
    const plugins = ["@babel/plugin-proposal-regexp-modifiers"];
  
    return {
      presets,
      plugins
    };
  }