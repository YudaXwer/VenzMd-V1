/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')
let fs = require('fs')
let handler = async (m) => {
let esce = `
Bot ini Menggunakan Library Dari

https://github.com/adiwajshing/Baileys`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/esce.jpg') },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Library',
               url: 'https://github.com/adiwajshing/Baileys'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler


