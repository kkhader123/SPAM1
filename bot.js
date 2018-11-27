const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on('ready', async() => {
var server = "Id server"; // ايدي السررفر
var channel = "id room";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , Forest Spam , ')
    },305);
})



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader THE King **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The King **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
