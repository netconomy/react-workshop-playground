module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            'test_index.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test_index.js': ['webpack']
        },
        reporters: ['dots', 'coverage'],
        singleRun: true,
        webpack: {
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
                ],
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /(tests|node_modules|bower_components)\//,
                    loader: 'istanbul-instrumenter'
                }]
            },
            watch: true
        },
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
