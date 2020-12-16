const rewireDefinePlugin = require('react-app-rewire-define-plugin');

module.exports = function override(config, env) {
/*   config = rewireDefinePlugin(config, env, {
    REACT_APP_TITLE: JSON.stringify(),
  });
 */
  return config;
};
