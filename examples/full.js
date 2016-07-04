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

            const { sessionId, context, entities } = request;
            const { text, quickreplies } = response;

            return new Promise(function(resolve, reject) {
                //res object is attached to the sessionId
                sessionId.res.reply(text);
                return resolve();
            });
        },
    };

    const bot = robot => {

        const witRobot = new witHelper.Robot(TOKEN, actions, robot);

        //will listen for "@testbot: hey you"
        const reg = /(\ *@(.*):\ +(hey)(.*))/i;

        witRobot.getMessage = (res) => { //custom getMessage
            return res.match[3]; //return "you"
        };

        witRobot.getSession = (res) => { //custom getSession
            //for example, use Slack room id instead of user id
            return res.enveloppe.room;
        };

        witRobot.respond(reg, (err, context, res) => {

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
