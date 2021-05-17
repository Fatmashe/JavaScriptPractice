var income=1000;
var revenue =600;
 var taxes = 500;


 
let incomeObjective = income >= 800;
let taxesObjective = taxes < 400;
let bonusObjective= revenue == 600;
console.log("Income Objective: " + incomeObjective);
console.log("Taxes Objective: " + taxesObjective);
console.log("Bonus Objective: " + bonusObjective);
/* Income Objective: true
Taxes Objective: false
Bonus Objective: true */
