/* eslint-disable import/no-extraneous-dependencies */
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new LodashModuleReplacementPlugin({
                paths: true
            })
        ],
        externals: {
            // externals: {
            //     lodash: {
            //         commonjs: 'lodash',
            //         commonjs2: 'lodash',
            //         amd: 'lodash',
            //         root: '_'
            //     }
            // }
        }
    }
};
