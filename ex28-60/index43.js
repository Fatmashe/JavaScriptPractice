var text = "game of thrones";
var firstChar = text.charAt(0);
var secondChar= text.charAt(5) ;
var thirdChar = text.charAt(8);

var result = firstChar.concat(secondChar+thirdChar);
result =result.toUpperCase();
console.log("the final result is: "+ result);
//the final result is: GOT char(8)
//the final result is: GO char(1000)
