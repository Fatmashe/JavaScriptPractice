var message ="3.14 it's a great number but 42 it's the answer to life.";
var  pi= parseFloat(message.substr(0,4));
var  answerToLife = parseInt(message.substr(29,31));
console.log("pi "+pi);
console.log("answerToLife "+answerToLife);
var result= pi + answerToLife;
console.log("result "+ result);
/* pi 3.14
answerToLife 42
result 45.1*/