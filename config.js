const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94772475971";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_29_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImxZc3JQSXpKTGlvOFdFaW5aMTRRb0JnTWR6K2tScUdsSERSQzBoSm1DeDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhYX2szWXBWVGJLMlFNSFBmWWNuNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWE2MTg3MWItYjRhOC00ZDI4LTkyNWUtYzE3ZjFlOTQxZTVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDE5OSxcbiAgICAgIDQ1LFxuICAgICAgMjQ0LFxuICAgICAgMTYzLFxuICAgICAgMTUwLFxuICAgICAgMSxcbiAgICAgIDExMSxcbiAgICAgIDM2LFxuICAgICAgNjAsXG4gICAgICAxMDcsXG4gICAgICA1NyxcbiAgICAgIDI0LFxuICAgICAgOTYsXG4gICAgICA2OSxcbiAgICAgIDI4LFxuICAgICAgMTI2LFxuICAgICAgMTUxLFxuICAgICAgMjI3LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgODEsXG4gICAgICAxNDEsXG4gICAgICAxNTUsXG4gICAgICAxNyxcbiAgICAgIDU5LFxuICAgICAgMjMxLFxuICAgICAgMTg1LFxuICAgICAgMjMsXG4gICAgICAyMDcsXG4gICAgICAyNDAsXG4gICAgICA5MSxcbiAgICAgIDExMCxcbiAgICAgIDQyLFxuICAgICAgNDIsXG4gICAgICAxMDIsXG4gICAgICAxNzgsXG4gICAgICAyMjMsXG4gICAgICAxMjAsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIMkZZSEU5RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzI0NzU5NzE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmb/wnZm08J2ZvPCdmbjwnZm98J2Zs/CdmoQg8J2agfCdmoTwnZqF8J2ZuPCdmoLwnZm38J2ZsPCdmb1cIixcbiAgICBcImxpZFwiOiBcIjExNTczMjYwODIwNDkzNDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmN3B2d0ZFS25NcTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOVpYc3pIVkpyaEZvejQzY1dmZW1LWVAvNjJPUjVEdDA0MTlFelBmVm9pND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2a3VCVEV0TTFWVWVXbnIyYWgyMnNZek5KK1NrQnF4a2VNZEVtUzBhWHdiV2ZSdGMyUDEwTXR1Rm1kVVJ5bk5Oa3p5dVphak8wKzB1NXh6dEgra09DUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1aEZBL2wrTG9VMmtQQUNHN0Q1RVU1N3MwSDJtRmltUGJBRmhmc0lsZDNHK2I3TERxdDQ4MysvQ2oycVpkd1cvbUt5UmgvVkovM0IzK2c0Nkk3amVqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MjQ3NTk3MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjgxNzc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
