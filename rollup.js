var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');

rollup.rollup({
    entry: 'src/index.js',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
}).then(function(bundle) {
    bundle.write({
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        format: 'umd',
        moduleName: 'lib-model',
        sourceMap: true,
        dest: 'dist/bundle.js'
    });
});