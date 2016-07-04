// Description:
//   Test bot
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
//
// Author:
//   Guillaume <guillaume@wuips.com>

'use strict';

(() => {

    const witHelper = require('hubot-wit-helper');

    const TOKEN = (() => {

        const token = process.env.WIT_TOKEN;

        if (!token) {
            throw new Error('WIT_TOKEN missing');
        }

        return token;
    })();

    const actions = {
        send(request, response) {

            const { sessionId } = request;
            const { text } = response;

            return new Promise(function(resolve) {
                //res object is attached to the sessionId
                sessionId.res.reply(text);
                return resolve();
            });
        },
    };

    const bot = robot => {

        const witRobot = new witHelper.Robot(TOKEN, actions, robot);

        witRobot.respond(/(.*)/gi, (err, context, res) => {

            console.log(`[USER] ${witRobot.getMsg(res)}`);

            if (err) {
                console.error(err);
                return;
            }

            //do stuff if you want

        });

    };

    module.exports = bot;

})();
