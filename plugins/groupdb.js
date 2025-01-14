let handler = async (m, { conn }) => {
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `• ${await conn.getName(jid)}\n• ${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`List Groups:
${txt}
`.trim())
}
handler.help = ['groupdb', 'listgc']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(group(s|list))$/i

module.exports = handler