/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')
let handler = async (m) => {
let duit = `*────── 「 SEWA 」 ──────*

Hai 👋
Ingin Sewa Bot ?

┌〔 LIST HARGA 〕
├♪ 10K (1 Bulan)
├♪ 15K (2 Bulan)
├♪ 20K (3 Bulan)
├♪ 30K (6 Bulan)
├♪ SEWA + PREMIUM (+5K)
└────




Chat Owner Untuk Order :
wa.me/6285664770042 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.postimg.cc/KYL0g2K7/bank.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [
              {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
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

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
