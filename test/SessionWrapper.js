
'use strict';

(() => {

    const assert = require('chai').assert;

    describe('SessionWrapper', function () {

        const SessionWrapper = require('../lib/SessionWrapper');

        const
            id  = '1234',
            res = {hello: 'world'};

        it('should save both session and res', function () {
            const session = new SessionWrapper(id, res);

            assert.equal(session.id, id);
            assert.equal(session.res, res);
        });

        it('should return id as String', function () {
            const session = new SessionWrapper(id, res);
            assert.equal(session.toString(), id);
        });

    });

})();
