

module.exports = function( gulp, plugin, config ) {

    return function() {

        return plugin.watch( [
            config.client.glob.src,
            config.client.path.bower
        ], function( e ) {
            var reloadDelay = 0;

            // console.log( e.event, e.extname );
            if ( e.event == 'add' || e.event == 'unlink' ) {
                config.task.inject();
                reloadDelay = 750;
            }

            // console.log( e.extname );

            switch( e.extname ) {
                case '.scss': config.task.sass(); break;
                case '.json': config.task.wiredep(); break;
                case '.html': case '.js': 
                    setTimeout( function() {
                        plugin.browserSync.reload(); 
                    }, reloadDelay );
                break;
            }
        } );
    };
};