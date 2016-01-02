'use strict';

module.exports = function ( gulp, plugins ) {
    return function() {
        function format(string) {
            var username = string.toLowerCase();
            return username.replace(/\s/g, '');
        }

        var workingDirName = plugins.path.basename(process.cwd()),
          homeDir, osUserName, configFile, user;

        if (process.platform === 'win32') {
            homeDir = process.env.USERPROFILE;
            osUserName = process.env.USERNAME || plugins.path.basename(homeDir).toLowerCase();
        }
        else {
            homeDir = process.env.HOME || process.env.HOMEPATH;
            osUserName = homeDir && homeDir.split('/').pop() || 'root';
        }

        configFile = plugins.path.join(homeDir, '.gitconfig');
        user = {};

        if (require('fs').existsSync(configFile)) {
            user = require('iniparser').parseSync(configFile).user || {};
        }

        return {
            appName: workingDirName,
            userName: osUserName || format(user.name || ''),
            authorName: user.name || '',
            authorEmail: user.email || ''
        };
    };
};