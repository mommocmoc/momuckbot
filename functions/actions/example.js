const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* example.js
*
*   Basic example action handler. Called in response to an input from an
*     interactive message action with name set to "example".
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
if(actions[0].value.match(/test/)){
  callback(null,{
    text:'의도한 기능 작동완료'
  })
}else{
  callback(null, {
    text: `Hello, <@${user}>!\nThis text will overwrite the original interactive message`,
    attachments: [{
      text: 'Try hitting this endpoint again by clicking the button!',
      fallback: 'Can\'t display attachment',
      callback_id: 'exam',
      actions: [
        {
          name: 'example',
          text: 'Refresh',
          type: 'button',
          value: 'test'
        }
      ]
    }]
  });
}
};
