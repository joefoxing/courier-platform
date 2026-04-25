const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);

// Ensure metro uses the correct node_modules
// This prevents picking up root workspace expo deps
defaultConfig.watchFolders = [
  path.resolve(__dirname, "node_modules"),
];

// Force resolution from this project's node_modules
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
];

module.exports = defaultConfig;
