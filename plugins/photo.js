let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [teks1, teks2] = text.split `|`

let textinv = `*Teks Satunya Harap Diisi !*`
let teksinv = `*Teks Duanya Harap Diisi !*`
    if (!teks1) return conn.reply(m.chat, textinv, m)
    if (!teks2) return conn.reply(m.chat, teksinv, m)
    if (!text) return conn.reply(m.chat, 'Teksnya Mana kak ?', m)

  await m.reply('Sedang membuat...')
 let hasil = await (await fetch('https://yx-api.herokuapp.com/api/canvas/gfx3' + '?text1=' + teks1 + '&text2=' + teks2)).buffer()
 let caption = `*Nih Kak, Satu Logo 1k:v*`

    conn.sendFile(m.chat, hasil, 'logo4.jpg', caption, m)
}
handler.help = ['logo4 <teks1|teks2>']
handler.tags = ['logo']
handler.command = /^(logo4)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
