'use strict';

module.exports = function( config ) {
    return {
        firstRound: [ {
            name: 'appName',
            message: 'What is the name of the project?',
            default: config.defaults.appName
        }, {
            type: 'list',
            name: 'framework',
            message: 'Wich framework would you like to use?',
            choices: [
                'Bootstrap',
                'Foundation (ZURB)',
                'No framework'
            ],
            default: 'Bootstrap'
        }, {
            type: 'confirm',
            name: 'fontAwesome',
            message: 'Do you want to use font-awesome?',
            default: true
        } ],
        secondRound: [ {
            type: 'list',
            name: 'setup',
            message: 'With what kind of setup would you like to start?\n' +
                     'Barebone - just one example page with no HTML, Sass or JS setup\n' +
                     'Minimal - two example pages, a menu and minimal content setup\n',
            choices: [
                'Barebone', 
                'Minimal'
            ],
            default: 'Minimal'
        } ]
    };
};