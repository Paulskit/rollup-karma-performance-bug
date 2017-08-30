module.exports = function (config) {
	config.set({
        frameworks: ['jasmine'],

		files: [
            {pattern: 'node_modules/d3-selection/build/d3-selection.js', watched: false},
			// Make sure to disable Karma’s file watcher
			// because the preprocessor will use its own.
			{ pattern: 'test/**/*.spec.js', watched: false }
		],

		preprocessors: {
			'test/**/*.spec.js': ['rollup']
        },

        browsers: ['Chrome'],
        
        reporters: ['dots'],

		rollupPreprocessor: {
			plugins: [
				require('rollup-plugin-buble')()
			],
			format: 'iife',         // Helps prevent naming collisions.
			name: 'test', // Required for 'iife' format.
            sourcemap: 'inline',     // Sensible for testing.
            globals: {
                'd3-selection': 'd3'
            }
		}
	})
}