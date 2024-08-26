module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 🥵SK SHAKIL(TOM) 
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : Islam
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Rangpur, Bangladesh
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Rangpur.Lalmonirhat. patgram
𝐆𝐞𝐧𝐝𝐞𝐫.   : Male
𝐀𝐠𝐞           : 17+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : Single Life Is Vest🥵💌
𝐖𝐨𝐫𝐤        : College 
𝐆𝐦𝐚𝐢𝐥       : xaikotom0@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/01918546009
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/.......
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://scontent.xx.fbcdn.net/v/t1.15752-9/456085387_1073674757442108_7094234074580174013_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHVp31AcHrV4llZLJ1WQGw-Vs2txin1cpBWza3GKfVykHoZEnUJlJuTYbNpL_d00HDi1md2d_ZnK0s-tTgi4sUw&_nc_ohc=qTMesNtFy7IQ7kNvgGBigeV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEfSxMFcXOxCQUnXQPJLRptIL05JojfdJQi5gfE-IgQTg&oe=66F3FD02`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61552248422194/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
