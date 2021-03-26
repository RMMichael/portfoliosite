var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    entry: './src/js/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public/static',
        contentBasePublicPath: '/',
        publicPath: '/',
        openPage: 'gitsub',
        historyApiFallback: {
            disableDotRule: true,
            index: '/index.html'
        },
        proxy: {
            //insert api path
            '/api': 'http://127.0.0.1:8000'
        },
        port: 8081
    },
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './public/static'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'portfolio',
            // options: {
            // appMountId: 'root',
            // }
            // appMountId: 'root',
            // Load a custom template (lodash by default)
            template: 'src/resources/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                // For pure CSS - /\.css$/i,
                // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
                // For Less - /\.((c|le)ss)$/i,
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                            // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                        },
                    },
                    // {
                    //     loader: "postcss-loader",
                    //     options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
                    // },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                            features: {
                                                'nesting-rules': true
                                            }
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    // Can be `less-loader`
                    // {
                    //     loader: "sass-loader",
                    // },
                ],
            },
            // {
            //     test: /\.css$/i,
            //     use: ['style-loader', 'css-loader']
            // },
            // use rule until materialUI updated to work with webpack
            // https://github.com/webpack/webpack/issues/11467
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            }
        ]
    }
};
