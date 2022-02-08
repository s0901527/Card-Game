function hehe(){
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
 
var dict = {
    "AH" : "https://deckofcardsapi.com/static/img/AH.png",
    "AC" : "https://deckofcardsapi.com/static/img/AC.png",
    "AS" : "https://deckofcardsapi.com/static/img/AS.png",
    "AD" : "https://deckofcardsapi.com/static/img/AD.png",
 
    "2H" : "https://deckofcardsapi.com/static/img/2H.png",
    "2C" : "https://deckofcardsapi.com/static/img/2C.png",
    "2S" : "https://deckofcardsapi.com/static/img/2S.png",
    "2D" : "https://deckofcardsapi.com/static/img/2D.png",
 
    "3H" : "https://deckofcardsapi.com/static/img/3H.png",
    "3C" : "https://deckofcardsapi.com/static/img/3C.png",
    "3S" : "https://deckofcardsapi.com/static/img/3S.png",
    "3D" : "https://deckofcardsapi.com/static/img/3D.png",
 
    "4H" : "https://deckofcardsapi.com/static/img/4H.png",
    "4C" : "https://deckofcardsapi.com/static/img/4C.png",
    "4S" : "https://deckofcardsapi.com/static/img/4S.png",
    "4D" : "https://deckofcardsapi.com/static/img/4D.png",
 
    "5H" : "https://deckofcardsapi.com/static/img/5H.png",
    "5C" : "https://deckofcardsapi.com/static/img/5C.png",
    "5S" : "https://deckofcardsapi.com/static/img/5S.png",
    "5D" : "https://deckofcardsapi.com/static/img/5D.png",
 
    "6H" : "https://deckofcardsapi.com/static/img/6H.png",
    "6C" : "https://deckofcardsapi.com/static/img/6C.png",
    "6S" : "https://deckofcardsapi.com/static/img/6S.png",
    "6D" : "https://deckofcardsapi.com/static/img/6D.png",
 
    "7H" : "https://deckofcardsapi.com/static/img/7H.png",
    "7C" : "https://deckofcardsapi.com/static/img/7C.png",
    "7S" : "https://deckofcardsapi.com/static/img/7S.png",
    "7D" : "https://deckofcardsapi.com/static/img/7D.png",
 
    "8H" : "https://deckofcardsapi.com/static/img/8H.png",
    "8C" : "https://deckofcardsapi.com/static/img/8C.png",
    "8S" : "https://deckofcardsapi.com/static/img/8S.png",
    "8D" : "https://deckofcardsapi.com/static/img/8D.png",
 
    "9H" : "https://deckofcardsapi.com/static/img/9H.png",
    "9C" : "https://deckofcardsapi.com/static/img/9C.png",
    "9S" : "https://deckofcardsapi.com/static/img/9S.png",
    "9D" : "https://deckofcardsapi.com/static/img/9D.png",
 
    "0H" : "https://deckofcardsapi.com/static/img/0H.png",
    "0C" : "https://deckofcardsapi.com/static/img/0C.png",
    "0S" : "https://deckofcardsapi.com/static/img/0S.png",
    "0D" : "https://deckofcardsapi.com/static/img/0D.png",
 
    "JH" : "https://deckofcardsapi.com/static/img/JH.png",
    "JC" : "https://deckofcardsapi.com/static/img/JC.png",
    "JS" : "https://deckofcardsapi.com/static/img/JS.png",
    "JD" : "https://deckofcardsapi.com/static/img/JD.png",
 
    "QC" : "https://deckofcardsapi.com/static/img/QC.png",
    "QS" : "https://deckofcardsapi.com/static/img/QS.png",
    "QD" : "https://deckofcardsapi.com/static/img/QD.png",
 
    "KH" : "https://deckofcardsapi.com/static/img/KH.png",
    "KC" : "https://deckofcardsapi.com/static/img/KC.png",
    "KS" : "https://deckofcardsapi.com/static/img/KS.png",
    "KD" : "https://deckofcardsapi.com/static/img/KD.png",
 
}
 
var cards = [    "AH",
"AC" ,
"AS" ,
"AD" ,
 
"2H" ,
"2C" ,
"2S" ,
"2D" ,
 
"3H" ,
"3C" ,
"3S" ,
"3D" ,
 
"4H" ,
"4C" ,
"4S" ,
"4D" ,
 
"5H", 
"5C" ,
"5S" ,
"5D" ,
 
"6H" ,
"6C" ,
"6S" ,
"6D" ,
 
"7H" ,
"7C" ,
"7S" ,
"7D" ,
 
"8H" ,
"8C" ,
"8S" ,
"8D" ,
 
"9H" ,
"9C" ,
"9S" ,
"9D" ,
 
"0H" ,
"0C" ,
"0S" ,
"0D" ,
 
"JH" ,
"JC" ,
"JS" ,
"JD" ,
 
"QC" ,
"QS" ,
"QD" ,
 
"KH" ,
"KC" ,
"KS" ,
"KD"];
 
shuffle(cards)
Player1 = [];
Player2 = [];
for(var i = 0; i<26; i++){
    Player1.push(cards[i]);
}
for(var i = 0; i<25; i++){
    Player2.push(cards[i]);
}
 
for(var i = 0; i<Player1.length; i++){
    var img = document.createElement("img");
    img.src = dict[Player1[i]];
    document.getElementById("board").appendChild(img);
}
 
}
