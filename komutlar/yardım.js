const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Dark Zone V13 Mod| Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('Dark Zone V13 Mod| Yardım Menüsü', true)
        .addField("`/yardım`", "Yardım Menüsüne bakarsın.", true)
        .addField("`/komutları-aç`", "Bütün komutları aktif hale getirir.", true)
        
        .addField("`/kick`", "Belirtilen kullanıcıyı sunucu'dan atar.", true)
        .addField("`/ban`", "Belirtilen kullanıcıyı sunucu'dan yasaklar.", true)
        .addField("`/mute`", "Belirtilen kullanıcıyı susturur.", true)
        .addField("`/jail`", "Belirtilen kullanıcıyı hapise atar.", true)
        .addField("`/timeout`", "Belirtilen kullanıcıyı süreye atar.", true)
        
        .addField("`/unban`", "Belirtilen kullanıcı'nın yasağını açar.", true)
        .addField("`/unmute`", "Belirtilen kullanıcı'nın susturmasını açar.", true)
        .addField("`/unjail`", "Belirtilen kullanıcı'nın hapsini açar.", true)
        
const buton = new MessageButton().setLabel('Dark Zone').setStyle('LINK').setURL('https://discord.gg/pMaMHzFqVu');
const button = new MessageButton().setLabel('Dark Bot').setStyle('LINK').setURL('https://discord.com/oauth2/authorize?client_id=846448222263836692&scope=bot&permissions=2080907455')

        const row = new MessageActionRow().addComponents(buton).addComponents(button)
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
        
interaction.reply({ embeds:[embed] })}
} 