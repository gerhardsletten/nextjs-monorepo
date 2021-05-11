const path = require('path')
const withTM = require('next-transpile-modules')(['webapp-lib'])
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config')
const nextTranslate = require('next-translate')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = nextTranslate(withBundleAnalyzer(withCustomBabelConfigFile(withTM({
  babelConfigFile: path.resolve('../../babel.config.js'),
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }
    return config
  },
}))))
