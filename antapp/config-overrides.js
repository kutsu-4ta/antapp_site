const {
    override,
    addWebpackResolve,
    addBabelPresets, // 追記
    addBabelPlugins //  追記
} = require('customize-cra')
const path = require('path')

module.exports = override(
    addBabelPresets(['@babel/preset-react']), //追記
    addBabelPlugins(['@emotion/babel-plugin']),  //追記
    addWebpackResolve({
        alias: {
            '@': path.resolve(__dirname, './src/')
        }
    })
)