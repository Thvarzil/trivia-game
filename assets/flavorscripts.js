var quotes = ["IN COLOR",
    "IN HYPNO-VISION",
    "AS SEEN ON TV",
    "presented in BC [Brain Control] where available",
    "Featuring GRATUITOUS ALIEN NUDITY",
    "LOADING..",
    "PRESENTED IN DOUBLE VISION (WHERE DRUNK)",
    "Mr. Bender's Wardrobe by ROBOTANY 500 ' +",
    "Condemned by the Space Pope",
    "Filmed On Location",
    "Transmitido en Martian en SAP",
    "-=PROUDLY MADE ON EARTH=-",
    "LIVE FROM OMICRON PERSEI 8",
    "MADE FROM MEAT BY-PRODUCTS",
    ">>NOT Y3K COMPLIANT<<",
    "Based on a true Story",
    "From the network that brought you 'The Simpsons'",
    "Not Based On the Novel by James Fenimore Cooper",
    "THE SHOW THAT WATCHES BACK",
    "Nominated For Three Glemmys",
    "This Episode Has Been Modified To Fit Your Primitive Screen",
    "COMING SOON TO AN ILLEGAL DVD",
    "As Foretold by Nostradamus",
    "A Stern Warning of Things to Come",
    "SIMULCAST ON CRAZY PEOPLE'S FILLINGS",
    "LARVA-TESTED, PUPA-APPROVED",
    "FOR EXTERNAL USE ONLY",
    "PAINSTACKINGLY DRAWN BEFORE A LIVE AUDIENCE",
    "TOUCH EYEBALLS TO SCREEN FOR CHEAP LASER SURGERY",
    "SMELL-O-VISION USERS INSERT NOSTRIL TUBES NOW",
    "Not a Substitute for Human Interaction",
    "Secreted by the Comedy Bee",
    "IF NOT ENTERTAINING; WRITE YOUR CONGRESSMAN",
    "BROADCAST SIMULTANEOUSLY ONE YEAR IN THE FUTURE",
    "Now With Chucklelin",
    "TORN FROM TOMORROW'S HEADLINES",
    "80% ENTERTAINMENT BY VOLUME",
    "DECIPHERED FROM CROP CIRCLES",
    "PLEASE RISE FOR THE FUTURAMA THEME SONG",
    "Bender's Humor by Microsoft Joke",
    "FEDERAL LAW PROHIBITS CHANGING THE CHANNEL",
    "FOR PROPER VIEWING, TAKE RED PILL NOW",
    "NO HUMANS WHERE PROBED IN THE MAKING OF THIS EPISODE",
    "FUN FOR THE WHOLE FAMILY EXCEPT GRANDMA AND GRANDPA",
    "THIS EPISODE PERFORMED ENTIRELY BY SOCK PUPPETS",
    "Hey, TiVo! Suggest THIS!",
    "WHEN YOU SEE THE ROBOT, DRINK!",
    "IT'S LIKE 'HEE HAW' WITH LASERS",
    "KRAFTED WITH LUV BY MONSTERS",
    "PSST... BIG PARTY AT YOUR HOUSE AFTER THE SHOW",
    "PLEASE TURN OFF ALL CELL PHONES AND TRICORDERS",
    "LOVE IT OR SHOVE IT",
    "SCRATCH HERE TO REVEAL PRIZE",
    "IF ACCIDENTALLY WATCHED INDUCE VOMITING",
    "WHERE NO FAN HAS GONE BEFORE",
    "KNOWN TO CAUSE INSANITY IN LABORATORY RATS",
    "NOT AFFILIATED WITH FUTURAMA BRASS KNUCKLE CO.",
    "Any Resemblance to actual Robots would be really cool",
    "OR IS IT?",
    "BIGFOOT'S CHOICE",
    "Soon to be a major religion",
    "NOW INTERACTIVE! Joystick controls Fry's left ear",
    "Dancing Space Potatoes? You Bet!",
    "A by-product of the TV industry",
    "BEATS A HARD KICK IN THE FACE",
    "VOTED 'BEST'",
    "THANKS FOR WATCHING, FUTURAMA SLAVE ARMY!",
    "Too Hot for Radio",
    "You can't prove it won't happen",
    "Controlling you through a chip in your butt since 1999",
    "See you on some other channel"];

var fonts = ["'UnifrakturMaguntia', cursive", "'VT323', monospace", "'Freckle Face', cursive", "'Michroma', sans-serif", "'Megrim', cursive", "'Rock Salt', cursive", "'Audiowide', cursive", "'Russo One', sans-serif", "'Kanit', sans-serif"];

function quoteRandomizer() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var font = fonts[Math.floor(Math.random() * fonts.length)];

    console.log(quote);
    console.log(font);

    $("#randomTitleBox").html("<h2 id='quotes'>" + quote + "</h2>");
    $("#randomTitleBox").css("font-family", font)
}

$(document).ready(function () {
    setInterval(quoteRandomizer, 5000);

});/**
 * Created by Monk on 7/16/2017.
 */
