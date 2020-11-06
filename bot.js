  const Discord = require("discord.js")
  const { prefix, token, } = require('./config.json')
  const client = new Discord.Client()

  const rohit = [6969696969]
  const CharlesLeemon = [214213]
  const pritam = [10000440]
  const yodaddy = [5604554]
  const Climax2147 = [340341]
  const disappointment = [545044]
  const shauny = [2432502]
  const Insaan = [244402]
  const Kazumax = [254052]
  const Preetam = [221202]
  const Ganesh_Gaitonde = [202123]
  const bantai069 = [521023]



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
      message.channel.send("https://i.ibb.co/Ws6KhpM/pp.jpg")
      message.channel.send("https://i.ibb.co/q5bfR0W/Screenshot-13.png")  

    }
    let img = () => {
      let rand = Math.floor(Math.random() * 100000) + 1000;
      message.channel.send("https://picsum.photos/500/800?random=" + rand)

    }
    let meme = () => {
      const meme = ["https://i.imgur.com/fV0Wmcp.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn86GYKy6zjyr703HT5yduPNEy7tCEiXBvOA&usqp=CAU",
        "https://i.ibb.co/vdZQsQp/UUYXYHih.jpg",
        "https://i.pinimg.com/564x/14/7a/91/147a919e43689c5567ab32f1438ecf20.jpg",
        "https://i.pinimg.com/564x/10/cf/0c/10cf0c5bf5c4bb49dc0d7c4712837bcb.jpg",
        "https://memetemplatehouse.com/wp-content/uploads/2020/06/abe-bhosdike-chutiya-ho-kya.jpg",
        "https://memetemplatehouse.com/wp-content/uploads/2020/06/pdhne-likhne-wale-chatro-ko-rajneeti-se-dur-rehna-chaiye.jpg",
        "https://memetemplatehouse.com/wp-content/uploads/2020/06/kya-bhosdike-mirzapur-meme.jpg",
        "https://memetemplatehouse.com/wp-content/uploads/2020/05/bhosdike-mirzapur-meme-template.jpg",
        "https://3.bp.blogspot.com/-eYIBmKAUYF0/W2KxCWx04BI/AAAAAAAAB-k/5q5qNFXlrOg6kg1EeA1RDt5h4bb_nOCyACLcBGAs/s1600/IMG_20180731_182656.jpg",
        "https://i.ibb.co/92xdbvy/image.png",
        "https://humornama.com/wp-content/uploads/2020/08/Nikal-Lavde-meme-template-on-Hindustani-bhau.jpg",
        "https://memetemplatehouse.com/wp-content/uploads/2020/05/yahin-p-marke-leta-denge-mirzapur-meme-template.jpg",
        "https://cdn.discordapp.com/attachments/761781032382365707/763584613871386664/Screenshot_20201008-074031.jpg",
        "https://cdn.discordapp.com/attachments/761781032382365707/763586311189430272/Screenshot_20201008-074803.jpg",
        "https://cdn.discordapp.com/attachments/761781032382365707/763586311525105715/Screenshot_20201008-074750.jpg",
        "https://cdn.discordapp.com/attachments/761781032382365707/763584613473189908/Screenshot_20201008-074142.jpg",
        "https://cdn.discordapp.com/attachments/761781032382365707/763586310912081950/Screenshot_20201008-074816.jpg"

      ]

      let gm = Math.floor(Math.random() * 20);

      message.channel.send(meme[gm])
    }
    let help = () => {
      message.channel.send("```" + "pls beg  -- to get free coins " + " \n " + " pls img  -- to get random image " + " \n " + " bet number  -- to guess no between 1 to 10(eg bet 2) " + " \n " + " pls quote  -- to show random quote " + " \n " + " pls tt  -- to show timetable " + " \n " + " pls bal  -- show yours /servers balance " + " \n " + " pls gm  -- GM " + "```")
    }
    if (message.author.username == "🅿🅰🅿🅰") {
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
        message.channel.send("__" + "**" + "🅿🅰🅿🅰 RAINED FREE COINS" + "**" + "__")
        message.channel.send("CharlesLeemon " + "**" + rand.toLocaleString() + "**")
        CharlesLeemon.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("pritam " + "**" + rand.toLocaleString() + "**")
        pritam.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("yodaddy" + "**" + rand.toLocaleString() + "**")
        yodaddy.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("Climax2147 " + "**" + rand.toLocaleString() + "**")
        Climax2147.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("shauny " + "**" + rand.toLocaleString() + "**")
        shauny.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("Kazumax " + "**" + rand.toLocaleString() + "**")
        Kazumax.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("Ganesh_Gaitonde " + "**" + rand.toLocaleString() + "**")
        Ganesh_Gaitonde.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("Preetam " + "**" + rand.toLocaleString() + "**")
        Preetam.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("bantai069 " + "**" + rand.toLocaleString() + "**")
        bantai069.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;

        message.channel.send("Insaan " + "**" + rand.toLocaleString() + "**")
        Insaan.push(rand)
        rand = Math.floor(Math.random() * 100000) + 1500;
        message.channel.send("disappointment " + "**" + rand.toLocaleString() + "**")
        disappointment.push(rand)
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
    else if (message.author.username == "bantai069") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        bantai069.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        bantai069.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        bantai069.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(bantai069.join('+'))
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
    else if (message.author.username == "Preetam bahi") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        Preetam.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        Preetam.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        Preetam.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(Preetam.join('+'))
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
    else if (message.author.username == "Insaan") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        Insaan.push(rand)
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
    else if (message.author.username == "Kazumax") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        Kazumax.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        Kazumax.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        Kazumax.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(Kazumax.join('+'))
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
    else if (message.author.username == "Ganesh_Gaitonde") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        Ganesh_Gaitonde.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        Ganesh_Gaitonde.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        Ganesh_Gaitonde.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(Ganesh_Gaitonde.join('+'))
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
    else if (message.author.username == "shauny") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        shauny.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        shauny.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        shauny.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(shauny.join('+'))
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
    else if (message.author.username == "ro the prettiest") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        yodaddy.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        yodaddy.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        yodaddy.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(yodaddy.join('+'))
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
    else if (message.author.username == "disappointment") {
      if (message.content.toLowerCase().startsWith(`${prefix}beg`)) {
        let rand = Math.floor(Math.random() * 10000) + 10;
        const ra = rand
        disappointment.push(rand)
        message.channel.send("You got " + "**" + ra.toLocaleString() + "**" + " coins for  yourself")
      }
      else if (message.content.toLowerCase().startsWith("bet " + luc)) {
        let rand = Math.floor(Math.random() * 100000) + 100;
        disappointment.push(rand)
        message.channel.send("won " + "**" + rand + "**" + "coins")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith("bet ")) {
        let rand = Math.floor(Math.random() * 1000) + 10;
        disappointment.push(-rand)
        message.channel.send("lost " + "**" + rand + "**" + " coins " + " (pick no between 1 to 10 )")
        luc = Math.floor(Math.random() * 10) + 1;
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}bal`)) {
        sum = eval(disappointment.join('+'))
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

        message.channel.send("```" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "```")
      }

      else if (message.content.toLowerCase().startsWith(`${prefix}img`)) {
        img()
        message.channel.send("```" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "```")
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}tt`)) {
        tt()
        message.channel.send("```" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "```")
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}quote`)) {
        getquote();
        message.channel.send("```" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "```")
        Yours
      }
      else if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
        message.channel.send("```" + "DM TO KING9969 TO ADD YOUR ACCOUNT" + "```")
        help()
      }
    }
    if (message.content.toLowerCase().startsWith(`${prefix}gm`)) {
      meme()
    }
  })
  client.login(token)
  //let member = message.mentions.members.first()
  //member.kick().then((member) => {
  // message.channel.send("gaand mara")
  //})
