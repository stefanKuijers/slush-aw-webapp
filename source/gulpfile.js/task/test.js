/*
    Unit Testing
*/
module.exports = function (gulp, plugin, config) {
    return function ( done ) {
        var server = new plugin.karma.Server( {
            configFile: __dirname.replace('gulpfile.js\\task', 'karma.conf.js'),
            singleRun: true,
            autoWatch: false
        }, function( failCount) {
            if ( failCount ) {
                plugin.notifier.notify( {
                  title: 'Unit test failed',
                  message: failCount + ' test' + (failCount > 1 ? 's' : '') + ' failed while running karma.\nCheck the command line',
                  sound: false // Only Notification Center or Windows Toasters
                } );
            }
            done();
        } );

        server.start();

        return server;
    };
};