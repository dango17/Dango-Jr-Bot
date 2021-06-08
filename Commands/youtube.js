module.exports = { 
    name: 'Youtube', 
    description: "this is the Youtube command!", 
    execute(message, args){ 
 
        let role = message.member.roles.cache.some(r => r.name === "BOT");

        //Does user have correct role to use bot? 
        //Role key = /@rolename
        if(message.member.roles.cache.has(r => r.name === "Mod")) { 
            message.channel.send('https://www.youtube.com/'); 
            //message.member.roles.remove('<@&851603169821589536>')
        }
        else {
           message.channel.send('No permission to use me! Let me Add you to the list!'); 
           message.member.roles.add(role).catch(console.error); 
        }
    }
}