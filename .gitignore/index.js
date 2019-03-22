const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var prefix = '$'
var token = "NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY"

client.login(token);
client.on('ready', function(){
client.user.setActivity("server ON = $𝙝𝙚𝙡𝙥 ", { type: "STREAMING"})
      console.log("En ligne")
})

client.on('message', function(message){ 
      if(message.content === (prefix+'offbot')){ 
      if (message.author.id != "445970920754905109") return
      message.channel.send('**💤**')
      message.delete().then(client.destroy())
      }
})

//https://discordapp.com/oauth2/authorize?client_id=533660915510542337&scope=bot&permissions=8

//invites commandes
const { Client, RichEmbed } = require('discord.js');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.content === (prefix+'invites')) {

    const embed = new RichEmbed()
      
      .setTitle('Invites')
      
      .setColor(0x000000) //0xff0000
      
      .setDescription("**Pour nous rejoindre ou m'inviter, il suffit juste de cliquer sur les liens donnés ci-dessous !**")
      
      .addField("Rejoignez nous","https://discord.gg/DTqpJbT")
      
      .addField("Invite moi","https://discordapp.com/oauth2/authorize?client_id=533660915510542337&scope=bot&permissions=8")
      
      .setTimestamp()
      
      .setFooter('INVITES $= "𝙎');
   
    message.channel.send(embed)
    
    message.delete();
  }
});

client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');
//rvdm command
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.content === (prefix+'rvdm')) {
  if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send(" :warning: **Vous n'avez pas les permissions pour utiliser cette commande !!** ")}
    message.channel.send('**Wsh les zgeg !!** @here')
    
    message.delete();
     }
})

//https://discord.gg/HJ6mchC

//#7c9ac2
//help command
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.content === (prefix+'help')) {

    const embed = new RichEmbed()
    
    .setColor("RANDOM")
    
    .setThumbnail("https://cdn.discordapp.com/avatars/445970920754905109/a_2c5c2198787397f75a03aef34bd4c936.gif?size=2048")
    
    .setAuthor(message.author.tag)
    
    .setDescription("```C.S.A Bot V.11. Copyright®```")
    
    .addField("Admin","```Commandes admins.```")
    
    .addField("$rainbowon @role","**Pour activer le rainbow sur un rôle !!**")
    
    .addField("$rainbowoff","**Pour stop le rainbow !!**")
    
    .addField("$rvdm","**Pour que le bot envoie un message + mention @here !!**")
    
    .addField("Moderations","```Commandes de modérations.```")
    
    .addField("$ban @user","**Pour ban un utilisateur !!**")
    
    .addField("$kick @user","** Pour kick un utilisateur !!**")
    
    .addField("$mute @user","**Pour mute un utilisateur !!**")
    
    .addField("$clear <nombre>","**Pour clear un message. Par exemple $clear 2 !!**")
    
    .addField("$warn @user","**Pour avertir un utilisateur !!**")
   
   .addField("$help2","**Page suivante !!**")
   
    .setTimestamp()
    
    .setFooter('HELP $= Last (Page 1/2) || "𝙎')
    
    message.channel.send(embed)
    
    console.log("Commande d'aide demandé")
    
    message.delete();
   }
});

client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');
//help2 command
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  
  if (message.content === (prefix+'help2')) {

    const embed = new RichEmbed()
    
    .setColor("RANDOM")
    
    .setThumbnail("https://cdn.discordapp.com/avatars/445970920754905109/a_2c5c2198787397f75a03aef34bd4c936.gif?size=2048")
    
    .setAuthor(message.author.tag)
    
    .setDescription("```Page 2/2 des commandes. Copyright®```")
    
    .addField("Autres","```Diverses commandes.```")
    
    .addField("$infractions @user","**Pour voir son nombre de warns !!**")
    
    .addField("$ping","**Pong !!**")
    
    .addField("$8ball <question>","**Poser une question pour avoir une réponse aléatoire !!**")
    
    .addField("$invites","**Pour recevoir une invite du bot et de notre serveur !!**")
    
    .setTimestamp()
    
    .setFooter('HELP $= Last (Page 2/2) || "𝙎')
    
    message.channel.send(embed)
    
    console.log("Commande d'aide demandé")
     
     message.delete();
   }
});

client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');

//https://discordjs.guide/command-handling/#individual-command-files

//https://nekos.life/api/v2/img/hug

//`${message.author.username} **fait un calin à** ${message.mentions.users.first().username} !`
//kick @user et ban @user
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**Veuillez mentionner un utilisateur !!** :warning: ")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Vous ne pouvez pas kick cet utilisateur !!** :warning:")
       if (!member.kickable) return message.channel.send("**Mes permissions sont insuffisantes !!** :warning: ")
       member.kick()
       message.channel.send("**"+member.user.username + '**a été exclu avec succès !** 👍')
    }
});
 
 client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');
 
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande** :cry:")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**Veuillez mentionner un utilisateur !!** :warning: ")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("**Vous ne pouvez pas bannir cet utilisateur !!** :warning:")
       if (!member.bannable) return message.channel.send("**Mes permissions sont insuffisantes !!** :warning: ")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '**a été banni avec succès !!** 👍')
    }
});
 client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');
 //clear <amout> et mute @user
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande !!** :warning:")
        let count = args[1]
        if (!count) return message.channel.send("**Veuillez indiquer un nombre de messages à supprimer**")
        if (isNaN(count)) return message.channel.send("**Veuillez indiquer un nombre valide**")
        if (count < 1 || count > 100) return message.channel.send("**Veuillez indiquer un nombre entre 1 et 100 !!**")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande !!** :warning:")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Membre introuvable** 🤷")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("**Vous ne pouvez pas mute ce membre !!**")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("**Mes permissions sont insuffisantes !!** :warning:")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' **a été mute avec succès !!** 👍')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' **a été mute avec succès !!** 👍')
            })
        }
    }
})

client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY');
//8ball command
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
   
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
    if (!args[0]) return message.reply("**Veuillez poser une question** 🤦")
        let rep = ["**Non.**", "**J'ai envie de dormir.**", "**Balec.**", "**Peut être...**", "**Absolument**", "**Crois même pas.**","**Oui.**", "**Repose la question stp, en te concentrant.**","**Tait toi si t'as rien à dire frérot !!**"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor(0x000000)
            .addField("tma dit", question)
            .addField("mes oreilles magiques me disent que -", rep[reptaille]);
        message.channel.send(embed)
    }
})

client.login('NTMzNjYwOTE1NTEwNTQyMzM3.D0RrHw.7HEpNtRRN5OcZeM_owA0aUwVpFY') 
//rainbowrole
client.on('ready', () => {
console.log("Rainbow bot is ready!" + "\n" + client.user.tag + "\n" + "Server Count: "  + client.guilds.size + "\n" + "Cached users: " + client.users.size + "\n" + "Enjoy!")
});
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === config.prefix + config.rainbowcommand) {
    if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send(" :warning: **Vous n'avez pas les permissions pour utiliser cette commande !!** ")}
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(config.messageresponse.rolenotfound).catch(err=> message.channel.send("**Aucune réponse !**"))
        if(!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(config.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = config.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, config.rainbowdelay); 
            message.channel.send(config.messageresponse.success).catch(err=> message.channel.send("**Aucune réponse !**"))

    }
    if(command === config.prefix + config.rainbowstop) {
    if(!message.member.hasPermission("ADMINISTRATOR")) {return message.channel.send(" :warning: **Vous n'avez pas les permissions pour utiliser cette commande !!** ")}
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(config.messageresponse.rainbowstop).catch(err=> message.channel.send("**Aucune réponse !**"))
                       }
});
client.login(config.token).catch(err=> console.log("Token Introuvable !"))
//warn @user et infractions @user
const fs = require('fs') 
const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(require("./config.json"))

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "warn") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**Vous n'avez pas la permission d'utiliser cette commande !!**")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Veuillez mentionner un membre !!** :warning:")
        if (member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("**Vous ne pouvez pas warn ce membre !!**")
        let reason = args.slice(2).join(' ')
        if (!reason) return message.channel.send("**Veuillez indiquer une raison !!** :warning:")
        if (!warns[member.id]) {
            warns[member.id] = []
        }
        warns[member.id].unshift({
            reason: reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./warns.json',JSON.stringify(warns))
        message.channel.send(member + " **a été warn pour la raison suivante :** " + reason + " 💣")
    }
 
    if (args[0].toLowerCase() === prefix + "infractions") {
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("**Veuillez mentionner un membre !!**")
        let embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.displayAvatarURL)
            .addField('10 derniers warns', ((warns[member.id]) ? warns[member.id].slice(0, 10).map(e => e.reason) : "**Ce membre n'a aucun warns !!**"))
            .setTimestamp()
            .setFooter("WARNS $= Last")
        message.channel.send(embed)
    }
})

//𝘾.𝙎.𝘼 𝙄𝙣 𝘼𝙘𝙩𝙞𝙤𝙣𝙨  𝘾𝙚𝙣𝙩𝙧𝙖𝙡 𝙎𝙚𝙘𝙪𝙧𝙞𝙩𝙮 𝘼𝙜𝙚𝙣𝙘𝙮  𝙍𝙖𝙛𝙖𝙡𝙚   𝙙*𝙝𝙚𝙡𝙥
const moment = require('moment');
require('moment-duration-format');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  
  if (message.content === (prefix+'ping')) {
  	const startTime = Date.now();
  	message.channel.send(`**Pong ! 🏓**`)
    .then(msg => {
    	const endTime = Date.now();
    msg.edit(`**Pong ! 🏓 (${endTime - startTime}ms**)`);
    
    message.delete();
  
   });
};
});






