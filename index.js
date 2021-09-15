/* const TelegramBot = require('node-telegram-bot-api')

const token = '1994185647:AAHGVUemxlvFxe91p-2F4jd0f9U653I__0c'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text == 'dog') {
      bot.sendPhoto(chatId, 'happy-pig.webp')
    }
  })
   */
  const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api

const token = '1994185647:AAHGVUemxlvFxe91p-2F4jd0f9U653I__0c'; // тут токен кторый мы получили от botFather

// включаем самого обота
const bot = new TelegramBot(token, {polling: true});

const randomPig = [
    "sad-pig.webp", "happy-pig.webp"
  ];

const randomIndex = Math.floor(Math.random() * randomPig.length);
let pig = randomPig[randomIndex];

//конфиг клавиатуры
const keyboard = [
    
    [
        {
          text: 'Узнать настроение Хрюшки',
          callback_data: 'pigMood'
        }
      ]
  ];
   

// обработчик события присылания нам любого сообщения
bot.on('message', (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал

  // отправляем сообщение
  bot.sendMessage(chatId, 'Хрю,хотите узнать настроение Хрюшки?', { // прикрутим клаву
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';
    

    if (query.data === 'pigMood') { 
        bot.sendPhoto(chatId, pig);
        /* bot.sendMessage(chatId, 'Грустная хрюшка('); */
    }
    if (img) {
        bot.sendPhoto(chatId, img, { // прикрутим клаву
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } 
  });