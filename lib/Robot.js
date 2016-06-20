
'use strict';

(() => {

    const
        SessionWrapper = require('./SessionWrapper'),
        ContextManager = require('./ContextManager');

    const Wit = require('node-wit').Wit;

    /**
     * Robot
     *
     * @constructor
     *
     * @param  {String}     WIT_TOKEN   Wit.ai token
     * @param  {Object}     actions     Wit.ai actions object
     * @param  {Object}     robot       Hubot robot object
     * @param  {Object}     logger      (optional) Wit.ai logger
     */
    const Robot = function (WIT_TOKEN, actions, robot, logger) {

        const client = new Wit(WIT_TOKEN, actions, logger);

        const contextManager = new ContextManager();

        /**
         * getSession
         *
         * @return {String}     Session id from res
         */
        Robot.prototype.getSession = (res) => res.envelope.user.User.id;

        /**
         * getMsg
         *
         * @return {String}     Message from res
         */
        Robot.prototype.getMsg = (res) => {
            return ((res.match.length > 1) ? res.match[1] : res.match[0])
                        .trim();
        };

        /**
         * action
         *
         * Generic hubot listen/hear/respond wrapper
         * Executes hubot's functions then fires Wit.ai runActions()
         *
         * @param  {Function}   action  Hubot's function (eg. robot.hear)
         *
         * @return {Function}           A new listener function (eg. will
         *                              replace robot.hear)
         */
        Robot.prototype.action = function (action) {

            return (match, options, cb) => {

                if (!cb) {
                    cb = options;
                    options = {};
                }

                action.call(robot, match, options, (res) => {

                    let msg     = this.getMsg(res),
                        session = this.getSession(res);

                    client.runActions(
                        new SessionWrapper(session, res),
                        msg,
                        contextManager.getContext(session),
                        (error, context) => {
                            if (!error) {
                                contextManager.setContext(session, context);
                            }

                            cb(error, context, res);
                        }
                    );

                });

            };

        };

        Robot.prototype.listen = function () {
            return this.action(robot.listen).apply(this, arguments);
        };

        Robot.prototype.hear = function () {
            return this.action(robot.hear).apply(this, arguments);
        };

        Robot.prototype.respond = function () {
            return this.action(robot.respond).apply(this, arguments);
        };

    };

    module.exports = Robot;

})();
