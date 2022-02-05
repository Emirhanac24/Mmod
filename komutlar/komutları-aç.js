const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const MLOG = require("../schemas/komutlar")

module.exports = {
    description: 'Dark Zone V13 Mod| KomutlarıAç Komutu',
  
    run: async (client, interaction) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")){return interaction.reply({ content: "Bu işlemi yapman için `KANALLARI_YONET` iznine sahip olmalısın!", ephemeral: false })};

const mlog = await MLOG.findOne({ guildID: interaction.guild.id });
 const k = mlog ? mlog.modlog : null;
  const ko = k === null ? "kapalı" : "açık";
  if(ko === "açık") return interaction.reply({ content: "Komutlar zaten açık!", ephemeral: false });
      

await MLOG.findOneAndUpdate({ guildID: interaction.guild.id, userID: interaction.user.id }, { $set: { komutlar: "açık" }}, { upsert: true });
  
      const embed = new MessageEmbed()
        .setTitle('Dark Zone V13 Mod| KomutlarıAç Komutu', true)
        .setDescription("Başarıyla Komutlar açıldı!")
        
const buton = new MessageButton().setLabel('Dark Zone').setStyle('LINK').setURL('https://discord.gg/pMaMHzFqVu');
const button = new MessageButton().setLabel('Dark Bot').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=846448222263836692&scope=bot&permissions=2080907455')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
        
interaction.reply({ embeds:[embed] })}
} 