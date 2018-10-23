
const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const picker = require(' ../../../picker.js');



/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/


module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  // Only send a response to certain messages
  if (text.match(/hey|hello|hi|sup/i)) {
    callback(null,{
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
    })
  } else if (text.match(/오늘 뭐 먹지|뭐 먹지|뭐먹지|점심/i)) {
    callback(null,picker.messageMake());
  }else {
    callback(null, {});
  }

};
