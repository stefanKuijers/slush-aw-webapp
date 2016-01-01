

module.exports = function( gulp, plugin, config ) {

    return function() {

        plugin.browserSync.init( {
            notify: false,
            // online: false,
            server: {
                baseDir: config.client.dir.src,
                routes: {
                    "/bower_components" : config.client.dir.bower,
                    "/css"              : config.client.dir.css,
                    "/data"             : config.client.dir.data
                },
            }
        } );
    };
};