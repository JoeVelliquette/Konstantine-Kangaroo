const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#165B33',
                            '@error-color': '#BB2528',
                            '@layout-header-padding': '0 0 0 10px',
                            '@layout-header-background': '#001529',
                            '@layout-footer-background': '#001529',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
