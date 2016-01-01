

module.exports = function( gulp, plugin, config ) {

    return function() {

        plugin.browserSync.init( {
            notify: false,
            server: {
                baseDir: './',
                // index:   'build/index.html',
                routes: {
                    "/bower_components" : config.client.dir.bower
                }
            }
        } );
    };
};