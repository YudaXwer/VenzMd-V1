let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Uhm... Teksnya?', m)
  await m.reply('Sedang membuat...')
 let hasil = await fetch('https://hadi-api.herokuapp.com/api/canvas/nulis?text=${text}')
 let caption = `*Nih kak:)*`

    conn.sendFile(m.chat, hasil, 'magernulis.jpg', caption, m)
}
handler.help = ['magernulis <teks>']
handler.tags = ['nulis']
handler.command = ['magernulis']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
