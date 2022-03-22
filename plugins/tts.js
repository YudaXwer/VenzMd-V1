var path = require('path');
const fs = require('fs')

let handler = async (m, {conn, text}) => {
  let [teks1, teks2] = text.split `|`
 var gtts = require('node-gtts')(teks1)
  let textinv = `*Kode Bahasa Harap Diisi !*`
  let teksinv = `*Teks Pesan Harap Diisi !*`
    if (!teks1) return conn.reply(m.chat, textinv, m)
    if (!teks2) return conn.reply(m.chat, teksinv, m)
    if (!text) return conn.reply(m.chat, 'Teksnya Mana kak ?', m)
    api = await tts(teks2)
    conn.sendFile(m.chat, api, '', wm, m, true)
}


handler.command = ['tts']
handler.help = ['tts lang|mess']
handler.tags = ['tools']
handler.limit = true

module.exports = handler
function tts(text) {
    return new Promise((resolve, reject) => {
      try {
        let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
        gtts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
        })
      } catch (e) { reject(e) }
    })
  }
