'use strict';

const paths = require('../config/paths');
const appPackageJson = require(paths.appPackageJson);
const bpkReactScriptsConfig = appPackageJson['backpack-react-scripts'] || {};
const resolveSymlinks =
  bpkReactScriptsConfig.resolveSymlinks != undefined
    ? bpkReactScriptsConfig.resolveSymlinks
    : true;

module.exports = {
  symlinks: resolveSymlinks,
};
