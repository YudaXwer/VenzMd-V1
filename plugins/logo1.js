let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '*Teksnya Mana Kak ?*', m)
  await m.reply('Sedang membuat...')
 let hasil = await (await fetch(`https://yx-api.herokuapp.com/api/canvas/gura?nama=${text}`)).buffer()
 let caption = `*Nih kak:)*`
    conn.sendFile(m.chat, hasil, '', '*Nih Kak, satu logo 1k:v*', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['logo1 <teks>']
handler.tags = ['logo']
handler.command = ['logo1']
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
