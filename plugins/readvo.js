let handler = async (m, { conn }) => {
    if (!m.quoted) throw '*Pesannya Mana Kak ??*'
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Itu Bukan Pesan Sekali Lihat'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*Pesan tersebut tidak dapat dibuka kak, mungkin sudah pernah dibuka oleh bot*'
    await conn.copyNForward(m.chat, msg, false, { readViewOnce: true })
}

handler.help = ['readvo']
handler.tags = ['tools']
handler.command = /^readvo/i

export default handler