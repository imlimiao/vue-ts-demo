module.exports = {
    productionSourceMap: false,
    configureWebpack: (config) => {
        config.plugins.push(

        )
    },
    // css相关配置
    css: {
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps
        sourceMap: false,
        loaderOptions: {
            sass: {
                // so this assumes you have a file named `src/variables.scss`
                prependData: `@import "~@/assets/style/sunAbout.scss";`
            }
        },
        requireModuleExtension: true
    }
}