
'use strict';

(() => {

    const wit = require('node-wit');

    module.exports = {
        SessionWrapper:     require('./lib/SessionWrapper'),
        ContextManager:     require('./lib/ContextManager'),
        firstEntityValue:   require('./lib/firstEntityValue'),
        Robot:              require('./lib/Robot'),
        log:                wit.log,
    };

})();
