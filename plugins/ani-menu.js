let handler = async (m, { conn, command, text }) => {
  let api = `https://yx-api.herokuapp.com/api/textpro/${command}?text=${text}`
  if (!text) return conn.reply(m.chat, '*Teksnya Mana Kak ?*', m)
  conn.sendButton(m.chat, '*~© R-BOT*', author, api, [['Back', `/menu`]], m)  
}

handler.command = handler.help = [
'jokerlogo',
'blackpink'
]
handler.tags = ['logo']
handler.premium = true
handler.limit = true
module.exports = handler