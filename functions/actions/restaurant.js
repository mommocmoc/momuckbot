const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const message = require('../../utils/message.js');
var actionCounter=0;


/**
* restaurant.js
*
*   식당 이름 누르면 누가 / 무엇을 눌렀는지 보여주기 만들고 싶다.
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
let userList = ['Cow','Jin','김연형'];

if(user.match(/Cow/i)){

    message(
      botToken,
      channel,
      {
      text: `<@${action.user.name}>님이 ${buttonAction.value} 식당을 선택하였습니다!`
      },
      (err, result) => {
        return callback(null, {
          text: `점심 투표 종료:grin:`

        }
      );
      }
    );
    actionCounter = 0;

} else {
  message(
  botToken,
  channel,
  {
    text: `<@${action.user.name}>님이 ${buttonAction.value} 식당을 선택하였습니다!`
  },
  (err, result) => {
    return callback(null, action.original_message);
  }
);
}
};
