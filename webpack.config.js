var path = require('path')
var webpack = require('webpack')


module.exports = {
    context: __dirname,

    entry: './static_root/js/index',

    output: {
        path: path.resolve('./static_root/bundles'),
        filename: '[name].js',
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // Don't beautify output (enable for neater output)
            beautify: false,
            // Eliminate comments
            comments: false,
            // Compression specific options
            compress: {
                warnings: false,
                // Drop `console` statements
                drop_console: true
            },
            // Mangling specific options
            mangle: {
                // Don't mangle $
                except: ['$'],
                // Don't care about IE8
                screw_ie8: true,
                // Don't mangle function names
                keep_fnames: true
            }
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },


        ]
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    }

}