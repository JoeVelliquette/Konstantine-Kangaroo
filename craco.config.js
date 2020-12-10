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
                            '@error-color': '#BB2528'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
