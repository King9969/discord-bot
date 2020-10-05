const Discord = require("discord.js")
const { prefix, token, } = require('./config.json')
const client = new Discord.Client()
const balance = []

client.once("ready", () => {
  console.log("ready")
  client.user.setActivity("WITH GAAND", { type: "PLAYING" })
})

client.on('message', message => {
  //console.log(message.content)


  if (message.content.startsWith(`${prefix}dedo`)) {
    let rand = Math.floor(Math.random() * 100000) + 10;
    const x = rand

    balance.push(rand)

    message.channel.send("You got " + x.toLocaleString() + " coins for the server")
  }
  else if (message.content.startsWith(`${prefix}bal`)) {

    sum = eval(balance.join('+'))
    message.channel.send("SERVERS NET WORTH IS " + sum.toLocaleString())
  }
  else if (message.content.startsWith(`${prefix}img`)) {
    let rand = Math.floor(Math.random() * 100000) + 1000;
    message.channel.send("https://picsum.photos/500/800?random=" + rand)

  }
  else if (message.content.startsWith(`${prefix}tt`)) {

    message.channel.send("https://ibb.co/ynSN6zp")

  }
})
client.login(token)






















//let member = message.mentions.members.first()
//member.kick().then((member) => {

 // message.channel.send("gaand mara")

//})
