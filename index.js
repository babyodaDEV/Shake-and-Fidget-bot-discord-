const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");


bot.on("ready", async () =>{
    console.log("BOT ready !");
    bot.user.setStatus("dnd");
    setTimeout(() => {
        bot.user.setActivity("Galérer", {type: "PLAYING"} );
    }, 100)
    
});
bot.on("guildMemberAdd", member =>{
    bot.channels.cache.get("711225949257072662").send(`bienvenue je crois ${member}`);
    member.roles.add("743477736299036693");
});

bot.on("message", message => {
console.log(message)
    if(message.content.startsWith("!wiki forteresse")){
        console.log("Test");
        bot.channels.cache.get("711225949257072662").send("FORTERESSE:" +
        "\n\n*Le niveau a avoir par rapport a son Quartier Général*" +
        "\n "  +
        "\n**Bâtiments essentiel :**" +
        "\n*Quartier* Ouvrier : Toujours au même niveau que le qg" +
        "\n*Forge*: environ 1 ou 2 niveau en dessous du qg et surtout mettre ses troupes a niveau le plus vite possible dans cette ordre ; 1 : Guerriers 2 : archer 3 : mage" +
        "\n*Carrière et Bûcheron* : Environ 3 niveau en dessous du qg" +
        "\nmais cela dépend si vous voulez avoir une forteresse passive ou offensive ," +
        
        "\n\n**Bâtiments secondaire de la forteresse :**" +
        "\n*Caserne Archer* : niveau 5/6 dès que possible mais privilégier avant les Bâtiments essentiel" +
        "\n*Caserne mage* : niveau 4/5  dès que possible mais privilégier avant les Bâtiments essentiel" +
        "\n*Le Mur* : up le mur est un choix personnels selon la forteresse que l'on veut construire et son schéma de développement ," +
        "\nsi vous voulez up le mur , il y a deux possibilité , Défensive ou Offensive" +
        
        "\n\n**Défensive**: Vous l'up a fond (en gardant a l'esprit que l'on up avant les bâtiment essentiel ) pour pouvoir assurer une défense solide et ne pas perdre de ressource" +
        "\n**Offensive** :Vous l'up un peu au début (jusqu'au niveau 4/5)  pour ne pas être sans défense au début et privilégier ensuite l'attaque" +
       
        "\n\n**Bâtiments hors avancée de la forteresse :**" +
        "\nLa Mine : La laisser niveau 1 au départ, et la monter petit à petit. Le Niveau 10 sera à monter pour le lvl 85 (ou +) si vous voulez le Graal ensuite" +
        "\n*Académie *: Elle peut vous apporter l'équivalent de ~20/30 de soif par jour au début si elle est bien up mais son efficacité va diminuer au fil du temps" +
        "\n*Banque *: Niveau 5 dès que possible puit a up au fil du temps si il vous faut de la place"); 

    }

});

bot.on("message", message => {
    console.log(message)
        if(message.content.startsWith("!wiki déblocage selon niveau")){
            console.log("Test");
            bot.channels.cache.get("711225949257072662").send("***Niveau: Contenu (ou l'obtenir)***" +
            "\nNiveau 1: un nouveau héros est né !" +
            "\nNiveau 10: Mission quotidienne, album de maniaque (apothicaire), donjon 1 (quêtes) & envoi de messages privés déverrouillés" +
            "\nNiveau 20: Donjon 2 déverrouillé (quêtes)" +
            "\nNiveau 25: Forteresse déverrouillée" +
            "\nNiveau 30: Donjon 3 débloqué (quêtes)" +
            "\nNiveau 40: Donjon 4 déverrouillé (quêtes)" +
            "\nNiveau 50: Miroir magique (quêtes) et donjon 5 débloqué (quêtes)" +
            "\nNiveau 66: Sorcière débloquée" +
            "\nNiveau 70: Donjon 6 débloqué (quêtes, apothicaire)" +
            "\nNiveau 75: Familiers débloqués (quêtes)" +
            "\nNiveau 80: Donjon 7 débloqué (quêtes)" +
            "\nNiveau 90: Forgeron débloqué (nécessite également les familiers)" +
            "\nNiveau 95: Donjon 8 (quêtes) & Roue de la Fortune 2.0 (quêtes) déverrouillé" +
            "\nNiveau 99: Portail du démon déverrouillé" +
            "\nNiveau 100: Toilette Arcane déverrouillée" +
            "\nNiveau 105: Manager d'arène accessible" +
            "\nNiveau 110: Donjon 9 (quêtes, armurerie) déverrouillé" +
            "\nNiveau 125: Monde des ombres déverrouillé (nécessite l'accès à la tour - se mine)" +
            "\nNiveau 125: Tornade déverrouillé (nécessite l'accès à la tour)" +
            "\nNiveau 200: Donjon 15 déverrouillé" +
            "\nNiveau 350: Donjon ombres 15 débloqué" +
            
           "\n\nLa tour est accessible: donjons achevés 1 à 9" +
            "\nLe monde des enfers: mine de gemmes (forteresse) niveau 10+, et accès à la tour" +
            "\nClé du donjon 10: après avoir achevé les donjons 1 à 9" +
            "\nClé du donjon 11: après avoir achevé le donjon 10 ou les 10 premiers étages de la tornade" +
            "\nClé du donjon 12: après avoir achevé le donjon 11" +
            "\nClé de donjon 13: après avoir achevé le donjon 12" +
            "\nClé de donjon 14: dans la mine de gemmes (forteresse) si le donjon 12 est déjà accessible" +
            "\nClés des donjons du monde des ombres 2 à 14: après avoir achevé plus de 5 étages du précédent donjon des ombres (Mine de gemmes)")
        }
    });

bot.login(token.token)