var playerName= "Darian Durant is lame";
var teames =" BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
var message = "Regina is the best Canadian city, Go Riders";

let firstResult= (playerName.slice(0,12).toUpperCase())+" "+ playerName.slice(14,16);
let secondResult= message.slice(36,43);
let thirdResult= message.slice(10,18);
let fourthResult= message.slice(32,36);
var result = `${firstResult} ${thirdResult} ${secondResult}${fourthResult}`;
console.log(result+"!!");

