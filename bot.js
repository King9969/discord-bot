const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const users = {
  rohit: { id: 6969696969, balance: 0 },
  CharlesLeemon: { id: 214213, balance: 0 },
  pritam: { id: 10000440, balance: 0 },
  yodaddy: { id: 5604554, balance: 0 },
  Climax2147: { id: 340341, balance: 0 },
  disappointment: { id: 545044, balance: 0 },
  shauny: { id: 2432502, balance: 0 },
  Insaan: { id: 244402, balance: 0 },
  Kazumax: { id: 254052, balance: 0 },
  Preetam: { id: 221202, balance: 0 },
  Ganesh_Gaitonde: { id: 202123, balance: 0 },
  bantai069: { id: 521023, balance: 0 }
};

const getRandomAmount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.once("ready", () => {
  console.log("Ready");
  client.user.setActivity("WITH ", { type: "PLAYING" });
});

client.on('message', message => {
  const getquote = () => {
    const api = require('./quotes.json');
    let ran = Math.floor(Math.random() * 1600);
    const q = api[ran];
    const a = q.text;
    message.channel.send("**" + a + "**");
  };

  let tt = () => {
    message.channel.send("https://i.ibb.co/Ws6KhpM/pp.jpg");
    message.channel.send("https://i.ibb.co/q5bfR0W/Screenshot-13.png");
  };

  let img = () => {
    let rand = Math.floor(Math.random() * 100000) + 1000;
    message.channel.send("https://picsum.photos/500/800?random=" + rand);
  };

  let meme = () => {
    const memes = [
      "https://i.imgur.com/fV0Wmcp.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn86GYKy6zjyr703HT5yduPNEy7tCEiXBvOA&usqp=CAU",
      "https://i.ibb.co/vdZQsQp/UUYXYHih.jpg",
      "https://i.pinimg.com/564x/14/7a/91/147a919e43689c5567ab32f1438ecf20.jpg",
      "https://i.pinimg.com/564x/10/cf/0c/10cf0c5bf5c4bb49dc0d7c4712837bcb.jpg",
      "https://memetemplatehouse.com/wp-content/uploads/2020/06/abe-bhosdike-chutiya-ho-kya.jpg",
      "https://memetemplatehouse.com/wp-content/uploads/2020/06/pdhne-likhne-wale-chatro-ko-rajneeti-se-dur-rehna-chaiye.jpg",
      "https://memetemplatehouse.com/wp-content/uploads/2020/06/kya-bhosdike-mirzapur-meme.jpg",
      "https://memetemplatehouse.com/wp-content/uploads/2020/05/bhosdike-mirzapur-meme-template.jpg",
      "https://3.bp.blogspot.com/-eYIBmKAUYF0/W2KxCWx04BI/AAAAAAAAB-k/5q5qNFXlrOg6kg1EeA1RDt5h4bb_nOCyACLcBGAs/s1600/IMG_20180731_182656.jpg",
      "https://i.pinimg.com/564x/11/3e/f5/113ef530f9e7e0c6f98f2197aa34342b.jpg"
    ];
    let ran = Math.floor(Math.random() * memes.length);
    message.channel.send(memes[ran]);
  };

  let help = () => {
    message.channel.send(
      "```Here are the available commands:\n\n" +
      `${prefix}quote : Retrieves a random quote.\n` +
      `${prefix}tt : Sends two images.\n` +
      `${prefix}img : Sends a random image.\n` +
      `${prefix}meme : Sends a random meme.\n` +
      `${prefix}help : Shows this help message.\n` +
      `${prefix}beg : Beg for some coins.\n` +
      `${prefix}luck : Check your luck.\n` +
      `${prefix}rain : Make it rain.\n` +
      `${prefix}bet <amount> : Bet your coins.\n` +
      `${prefix}bal : Check your balance.````
    );
  };

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "quote") {
    getquote();
  } else if (command === "tt") {
    tt();
  } else if (command === "img") {
    img();
  } else if (command === "meme") {
    meme();
  } else if (command === "help") {
    help();
  } else if (command === "beg") {
    const username = message.author.username;
    if (users.hasOwnProperty(username)) {
      const user = users[username];
      const randomAmount = getRandomAmount(1000, 3000);
      user.balance += randomAmount;
      message.channel.send(`You begged and got ${randomAmount} coins.`);
    }
  }
});

client.login(token);
