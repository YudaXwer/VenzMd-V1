let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    //let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    conn.groupAcceptInvite(code)
    //expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Berhasil masuk grup`)
    //let chats = global.db.data.chats[res]
    //if (!chats) chats = global.db.data.chats[res] = {}
    //if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <link>']
handler.tags = ['owner']
handler.owner = true
handler.command = /^join$/i

module.export = handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))