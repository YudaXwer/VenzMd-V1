/***let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }

  try {
    global.db.data.prems[who]
    m.reply(`Berhasil ! ${await conn.user.name} sekarang premium`)
  } catch (e) {
    throw `nomor tidak ada didatabase!`
  }
}
handler.help = ['addvip']
handler.tags = ['owner', 'group']
handler.command = /^addv(ip)?$/i

module.exports = handler
