
'use strict';

(() => {

    const path = require('path');

    module.exports = {
        SessionWrapper: require(
            path.join(__dirname, './lib/SessionWrapper')
        ),
        ContextManager: require(
            path.join(__dirname, './lib/ContextManager')
        ),
        firstEntityValue: require(
            path.join(__dirname, './lib/firstEntityValue')
        ),
        Robot: require(
            path.join(__dirname, './lib/Robot')
        ),
    };

})();
