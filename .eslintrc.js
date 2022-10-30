module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  ignorePatterns: ['assets/basic/*'],
  // add your custom rules here
  rules: {
    // Disable as landing doesn't contain any user content
    'vue/no-v-html': 'off'
  }
}
