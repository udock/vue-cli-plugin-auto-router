"use strict";
var udockBootstrapLoader = require.resolve('@udock/vue-plugin-auto-router/lib/loader');
module.exports = function (api, options) {
    var fjs = require.resolve('@udock/vue-plugin-auto-router');
    var fts = fjs.replace(/\.js$/i, '.ts');
    console.log('fjs', fjs);
    console.log('fts', fts);
    api.chainWebpack(function (webpackConfig) {
        webpackConfig.module
            .rule('vue-plugin-auto-router')
            .test(function (module) { return (module == fjs) || (module == fts); })
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-plugin-auto-router-loaders')
            .loader(udockBootstrapLoader)
            .end();
    });
};
