const { proto } = require('@adiwajshing/baileys')
async function react(conn, options = {}) {
      if (!conn) throw new Error("conn is not defined")
      if (conn.type == "legacy") throw new Error("Legacyconnet not yet supported")
      if (!options.jid) throw new Error("Jid not be empty")
      if (!options.id) throw new Error("id not be empty")
      if (!options.participant || !options.sender) throw new Error("participat not be empty")
      if (!options.timestamp) throw new Error("timestamp not be empty")
      if (!options.emoji) throw new Error("emoji not be empty")
      let react = await proto.ReactionMessage.create({
        key: {
          id: options.id,
          participant: options.sender || options.participant,
          remoteJid: options.jid,
        },
        text: options.emoji,
        senderTimestampMs: options.timestamp
      });
       if (conn) return await conn.relayMessage(react.key.remoteJid, {
       reactionMessage: react
     }, { messageId: await generateMessageID()});
  }}