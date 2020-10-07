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
const Shauny = []
const Insaan = [2]


let luc = Math.floor(Math.random() * 10) + 1;



client.once("ready", () => {

  console.log("ready")
  client.user.setActivity("WITH GAAND", { type: "PLAYING" })
})

client.on('message', message => {
  //console.log(message.author)
  //console.log(message.id)

  const getquote = () => {
    const api = require('./quotes.json')
    let ran = Math.floor(Math.random() * 1600)
    const q = api[ran]
    const a = q.text
    message.channel.send("**" + a + "**")


  }
  let tt = () => {
    message.channel.send("https://ibb.co/DDBpMk3")
  }
  let img = () => {
    let rand = Math.floor(Math.random() * 100000) + 1000;
    message.channel.send("https://picsum.photos/500/800?random=" + rand)
  }



  let help = () => {
    message.channel.send("```"+ " pls beg  -- to get free coins " +  " \n " +  " pls img  -- to get random image " +  " \n " +  " bet number  -- to guess no between 1 to 10(eg bet 2) " +  " \n " + "**" + " pls quote  -- to show random quote " +  " \n " +  " pls tt  -- to show timetable " +  " \n " +  " pls bal  -- show yours /servers balance " + "```")


  }

  if (message.author.username == "king9969") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      rohit.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}luck`)) {

      message.channel.send("PICK A NUMBER FROM 1 TO 10  (eg bet 10)")

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}rain`)) {
      let rand = Math.floor(Math.random() * 100000) + 1500;

      message.channel.send("__" + "**" + "KING RAINED FREE COINS" + "**" + "__")
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
      message.channel.send("Insaan " + "**" + rand.toLocaleString() + "**")
      Insaan.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;
      message.channel.send("JackHeroYO " + "**" + rand.toLocaleString() + "**")
      JackHeroYO.push(rand)
      rand = Math.floor(Math.random() * 100000) + 1500;



    }
    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      rohit.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      rohit.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(rohit.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
      help()
    }

  }
  else if (message.author.username == "CharlesLeemon") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      CharlesLeemon.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      Insaan.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      Insaan.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(Insaan.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
      help()
    }

  }
  else if (message.author.username == "Shauny") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      Shauny.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      Shauny.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      CharlesLeemon.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(Shauny.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
      help()
    }

  }

  else if (message.author.username == "CharlesLeemon") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      CharlesLeemon.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      CharlesLeemon.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      CharlesLeemon.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(CharlesLeemon.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
      help()
    }

  }
  else if (message.author.username == "Tatton ka saudagar") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      pritam.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      pritam.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      pritam.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(pritam.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {

      help()

    }

  }
  else if (message.author.username == "jupiterfest") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      jupiterfest.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      jupiterfest.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      jupiterfest.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(jupiterfest.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {

      help()

    }

  }
  else if (message.author.username == "Climax2147") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      Climax2147.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      Climax2147.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      Climax2147.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(Climax2147.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {

      help()
    }

  }
  else if (message.author.username == "JackHeroYO") {

    if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      JackHeroYO.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      JackHeroYO.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      JackHeroYO.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(JackHeroYO.join('+'))
      message.channel.send("**" + message.author.username + "**" + " NET WORTH IS " + "**" + sum.toLocaleString() + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
      help()

    }

  }

  else if (message.author.bot == false) {
    if (message.content.toLowerCase().startsWith(`${prefix} beg`)) {
      let rand = Math.floor(Math.random() * 10000) + 10;
      const ra = rand


      balance.push(rand)

      message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for the server")
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
    }

    else if (message.content.toLowerCase().startsWith("bet " + luc)) {


      let rand = Math.floor(Math.random() * 100000) + 100;


      balance.push(rand)
      message.channel.send("won " + "**" + rand + "**" + "coins")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith("bet ")) {


      let rand = Math.floor(Math.random() * 1000) + 10;


      balance.push(-rand)
      message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
      luc = Math.floor(Math.random() * 10) + 1;



    }
    else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {

      sum = eval(balance.join('+'))
      message.channel.send("SERVERS NET WORTH IS " + "**" + sum.toLocaleString() + "**")
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
      img()
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {

      tt()
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

    }
    else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {

      getquote();
      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")

      Yours
    }
    else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {


      message.channel.send("**" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "**")
      help()
    }
  }
})



client.login(token)























//let member = message.mentions.members.first()
//member.kick().then((member) => {

 // message.channel.send("gaand mara")

//})
