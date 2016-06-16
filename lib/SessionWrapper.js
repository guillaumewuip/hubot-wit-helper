
'use strict';

(() => {

    const SessionWrapper = function (id, res) {
        this._id = id;
        this.res = res;
    };

    SessionWrapper.prototype.toString = function () {
        return this._id.toString();
    };

    module.exports = SessionWrapper;

})();
