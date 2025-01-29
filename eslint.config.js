import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */

export default [
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  ...eslintPluginAstro.configs.recommended
];
