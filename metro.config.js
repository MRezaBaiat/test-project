// const blacklist = require('metro-config/src/defaults/blacklist');

// exclusionList is a function that takes an array of regexes and combines
// them with the default exclusions to return a single regex.
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    })
  }/*,
  resolver: {
    blacklistRE: blacklist([/src\/.*!/]),
  } */
};
