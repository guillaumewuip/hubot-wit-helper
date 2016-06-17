
'use strict';

(() => {

    const assert = require('chai').assert;

    describe('ContextManager', function () {

        const
            ContextManager = require('../lib/ContextManager'),
            contextManager = new ContextManager();

        it('should have getContext method', function () {
            assert.property(contextManager, 'getContext');
            assert.typeOf(contextManager.getContext, 'function');
        });

        it('should have setContext method', function () {
            assert.property(contextManager, 'setContext');
            assert.typeOf(contextManager.setContext, 'function');
        });

        it('should create new context when id doesn\'t exist', function () {
            assert.deepEqual(contextManager.getContext('abcd'), {});
        });

        it('should save context', function () {
            let id = '1234';
            let context = {hello: 'world'};

            contextManager.setContext(id, context);
            assert.equal(contextManager.getContext(id), context);
        });

    });

})();
