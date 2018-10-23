const shuffle = require('shuffle-array');
var restaurants=['판치야','129라멘','버거킹','가나안 감자탕','따이한','스타벅스','돈돈돈까스','스시도','함흥에겨울냉면','송림','별내옥설렁탕','압구정 부대찌개','써브웨이 약수점','맹산','푸줏간'];
var message = {
    replace_original:'false',
    text: '오늘의 점심 메뉴를 고민 중 이시군요?',
    attachments: []
};

var actionCounter = 0;

exports.messageMake = function(){
  actionCounter = 0;
  var newMessage = message;

  shuffle(restaurants);
  var action =[
      {
        name: 'restaurant',
        text: restaurants[0],
        type: 'button',
        value: restaurants[0]
      },
      {
        name: 'restaurant',
        text: restaurants[1],
        type: 'button',
        value: restaurants[1]
      },
      {
        name: 'restaurant',
        text: restaurants[2],
        type: 'button',
        value: restaurants[2]
      },
      {
        name: "repick",
        text: "다시 뽑아줘",
        style: "danger",
        type: "button",
        value: "다시 뽑기"

      }
    ];

    var attach = new Object();
    attach.text ='오늘 제안하는 메뉴입니다.:knife_fork_plate:';
    attach.actions=action;
    attach.callback_id='restarauntSelector'
    var attachArray = [attach];
    newMessage.attachments = attachArray
    return newMessage
};

exports.reMessageMake = function(){
  actionCounter=0;
  var newMessage = message;
  shuffle(restaurants);
  var action =[
      {
        name: 'restaurant',
        text: restaurants[0],
        type: 'button',
        value: restaurants[0]
      },
      {
        name: 'restaurant',
        text: restaurants[1],
        type: 'button',
        value: restaurants[1]
      },
      {
        name: 'restaurant',
        text: restaurants[2],
        type: 'button',
        value: restaurants[2]
      },
      {
        name: "repick",
        text: "다시 뽑아줘",
        style: "danger",
        type: "button",
        value: "다시 뽑기"

      }
    ];


    var attach = new Object();
    attach.text ='다시 제안하는 메뉴입니다.:yum:';
    attach.actions=action;
    attach.callback_id='restarauntReSelector'
    var attachArray = [attach];
    newMessage.attachments = attachArray
    return newMessage

};
