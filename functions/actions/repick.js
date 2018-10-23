const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const picker = require('../../picker.js');
const message = require('../../utils/message.js');

/**
* repick.js
*
*   새로운 식당 목록 보여주기
*
*   All Actions in response to interactive messages use this template, simply
*     create additional files with different names to add actions.
*
*   See https://api.slack.com/docs/message-buttons for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {object} action The full Slack action object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, action = {}, botToken = null, callback) => {

 let buttonAction = action.actions[0];

  message(
    botToken,
    channel,
    {
      text: `<@${action.user.name}>님이 ${buttonAction.value}를 선택하였습니다! 새로 선택된 메뉴를 확인해주세요. :hugging_face:`
    },
    (err, result) => {
      return callback(null, picker.reMessageMake());
    }
  );

};
