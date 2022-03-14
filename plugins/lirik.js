import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Contoh Penggunaan ${usedPrefix}${command} andmesh hanya rindu`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
lirik : *${result.title}*
Author : *${result.author}*


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <judul>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true
module.exports = handler