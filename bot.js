const Discord = require("discord.js")
const { prefix, token, } = require('./config.json')
const client = new Discord.Client()
const balance = []
const rohit = [7777777]
const CharlesLeemon = []
const pritam = [100000]
const jupiterfest = []
const Climax2147 = []
const JackHeroYO = []
const NightShade = []


let luc = Math.floor(Math.random() * 10) + 1;
console.log(luc)


client.once("ready", () => {

  console.log("ready")
  client.user.setActivity("WITH GAAND", { type: "PLAYING" })
})

client.on('message', message => {
  //console.log(message.author)
  //console.log(message.id)


  if (message.author.username == "king9969") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      rohit.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10  (eg bet 10)")

    }
    else if (message.content.startsWith(`${prefix}rain`)) {
      let rand = Math.floor(Math.random() * 100000) + 1500;

      message.channel.send("__"+"**" + "KING RAINED FREE COINS" + "**"+"__")
      message.channel.send("CharlesLeemon " + "**" + rand.toLocaleString() + "**")
      CharlesLeemon.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
      message.channel.send("pritam " + "**" + rand.toLocaleString() + "**")
      pritam.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
      message.channel.send("jupiterfest " + "**" + rand.toLocaleString() + "**")
      jupiterfest.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
      message.channel.send("Climax2147 " + "**" + rand.toLocaleString() + "**")
      Climax2147.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
            message.channel.send("NightShade " + "**" + rand.toLocaleString() + "**")
      NightShade.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
            message.channel.send("JackHeroYO " + "**" + rand.toLocaleString() + "**")
      JackHeroYO.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;



    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      rohit.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      rohit.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(rohit.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "NightShade") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      NightShade.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      NightShade.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      NightShade.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(NightShade.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "CharlesLeemon") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      CharlesLeemon.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      CharlesLeemon.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      CharlesLeemon.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(CharlesLeemon.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "Tatton ka saudagar") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      pritam.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      pritam.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      pritam.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(pritam.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "jupiterfest") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      jupiterfest.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      jupiterfest.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      jupiterfest.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(jupiterfest.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "Climax2147") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      Climax2147.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      Climax2147.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      Climax2147.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(Climax2147.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }
  else if (message.author.username == "JackHeroYO") {

    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      JackHeroYO.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      JackHeroYO.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      JackHeroYO.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(JackHeroYO.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")

      }
      getquote();



    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours /servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quote  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }

  }

  else if (message.author.bot == false) {
    if (message.content.startsWith(`${prefix}dedo`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand

      balance.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for the server")
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
    }
    else if (message.content.startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10 (eg bet 10)")

    }
    else if (message.content.startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      balance.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;
      console.log(luc)


    }
    else if (message.content.startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      balance.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + "(pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.startsWith(`${prefix}bal`)) {

      sum = eval(balance.join('+'))
      message.channel.send("SERVERS NET WORTH IS " + "**" + sum.toLocaleString() + "**")
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
    }
    else if (message.content.startsWith(`${prefix}img`)) {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

    }
    else if (message.content.startsWith(`${prefix}tt`)) {

      message.channel.send("https://ibb.co/DDBpMk3")
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

    }
    else if (message.content.startsWith(`${prefix}quote`)) {
      const getquote = () => {
        const api = require('./quotes.json')
        let ran = Math.floor(Math.random() * 1600)
        const q = api[ran]
        const a = q.text
        message.channel.send("**" + a + "**")
        message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

      }
      getquote();


      Yours
    }
    else if (message.content.startsWith(`${prefix}help`)) {


      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
      message.channel.send("**" + " r dedo  -- to get free coins " + "**")
      message.channel.send("**" + " r img  -- to get random image " + "**")
      message.channel.send("**" + " r bal  -- show yours/servers balance " + "**")
      message.channel.send("**" + " r tt  -- to show timetable " + "**")
      message.channel.send("**" + " r quo  -- to show random quote " + "**")
      message.channel.send("**" + " r luck  -- to guess no between 1 to 10 " + "**")

    }
  }
})



client.login(token)























//let member = message.mentions.members.first()
//member.kick().then((member) => {

 // message.channel.send("gaand mara")

//})
