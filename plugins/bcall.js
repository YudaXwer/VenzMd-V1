import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim Pesan Siaran Ke ${chats.length} Chat, Akan Selesai Dalam ${anu.length * 1.5} detik_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? '「 PESAN SIARAN 」\n' + teks : teks + '\n' + readMore + randomID(32)), true).catch(_ => _)
  m.reply('Broadcast Selesai:D')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true

module.exports = handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)