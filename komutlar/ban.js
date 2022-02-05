const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const MLOG = require("../schemas/komutlar")

module.exports = {
    description: 'Dark Zone V13 Mod| Ban Komutu',
  
    options:[{
      name: "kullanıcı",
      description: "Bir kullanıcı etiketlendiğinde o kullanıcıyı yasaklar!",
      type: "USER",
      required: true
    }],
  
    run: async (client, interaction) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")){return interaction.reply({ content: "Bu işlemi yapman için `KANALLARI_YONET` iznine sahip olmalısın!", ephemeral: false })};
   
const ml = MLOG.findOne({ guildID: interaction.guild.id });
    
 const mlo = ml ? "açık" : "kapalı";
  if(mlo === "kapalı"){return interaction.reply({ content: "Bu işlemi gerçekleştirmem için komutları açmanız gerekli!", ephemeral: false })};
      
      const m = interaction.options.getMember('kullanıcı')

      interaction.guild.bans.create(m.id, ["Sebep Girebilirsiniz!"])
        const embed = new MessageEmbed()
        .setTitle('Dark Zone V13 Mod| Ban Komutu', true)
        .setDescription("Başarıyla kullanıcı yasaklandı!")
        
const buton = new MessageButton().setLabel('Dark Zone').setStyle('LINK').setURL('https://discord.gg/pMaMHzFqVu');
const button = new MessageButton().setLabel('Dark Bot').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=846448222263836692&scope=bot&permissions=2080907455')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
        
interaction.reply({ embeds:[embed] })}
} 