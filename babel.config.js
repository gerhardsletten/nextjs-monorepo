module.exports = {
  presets: ['next/babel', '@babel/preset-react'],
  plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
}
