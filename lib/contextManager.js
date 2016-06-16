
'use strict';

(() => {

    const contextManager = {

        _contexts : {},

        getContext: (id) => {

            if (!contextManager._contexts[id]) {
                contextManager._contexts[id] = {};
            }

            return contextManager._contexts[id];
        },

        setContext: (id, context) => {
            contextManager._contexts[id] = context;
        }

    };

    module.exports = contextManager;


})();
