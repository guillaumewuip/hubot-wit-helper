
'use strict';

(() => {

    const ContextManager = function () {

        const _contexts = {};

        return  {
            getContext: (id) => {

                if (!_contexts[id]) {
                    _contexts[id] = {};
                }

                return _contexts[id];
            },

            setContext: (id, context) => {
                _contexts[id] = context;
            },
        };
    };

    module.exports = ContextManager;

})();
