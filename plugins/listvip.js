let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let pram = global.db.data.prems
  let prem = pram.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┌〔 Daftar Pengguna Premium 〕` + `\n` + prem.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n└────', m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premdb']
handler.tags = ['info']
handler.command = /^(premdb|premdata)$/i

module.exports = handler
