
'use strict';

(() => {

    const SessionWrapper = function (id, res) {
        this.id = id;
        this.res = res;
    };

    SessionWrapper.prototype.toString = function () {
        return this.id.toString();
    };

    module.exports = SessionWrapper;

})();
