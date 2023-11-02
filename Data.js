const fooddata = require('./food.json');

//Print all food items
function allfooditem() {
    return fooddata;
}
console.log("print all food items");
console.log(allfooditem());

//Print list of all vegetables items
function vegetablesitems() {
    return fooddata.filter((food) => food.category == 'Vegetable');
}
console.log("print all vegetables items");
console.log(vegetablesitems());

//Print list of all vegetables items
function fruitsitems() {
    return fooddata.filter((food) => food.category == 'Fruit');
}
console.log("print all fruits items");
console.log(fruitsitems());

//Print list of all protien items
function protienitems() {
    return fooddata.filter((food) => food.category == "Protein");
}
console.log("print all protien items");
console.log(protienitems());

// Print list of all nuts items
function nutsitems() {
    return fooddata.filter((food) => food.category === 'Nuts');
}
console.log("print all nuts items");
console.log(nutsitems());

//Print list of all grains items
function grainsitems() {
    return fooddata.filter((food) => food.category == "Grain");
}
console.log("print all grains items");
console.log(grainsitems());

//Print list of all dairy items
function dairyitems() {
    return fooddata.filter((food) => food.category === "Dairy");
}
console.log("print all dairy items");
console.log(dairyitems());

//print list of all items whose calorie more than 100
function calorieabove100() {
    return fooddata.filter((food) => food.calorie > 100);
}
console.log("print all calorie items above 100");
console.log(calorieabove100());

//print list of all items whose calorie less than 100
function caloriebelow100() {
    return fooddata.filter((food) => food.calorie < 100);
}
console.log("print all calorie items below 100");
console.log(caloriebelow100());

//print all the food items with highest protien content to lowest
function hightolowprotein() {
    return fooddata.sort((a, b) => b.protiens - a.protiens);
}
console.log("print all highest protien content to lowest items");
console.log(hightolowprotein());

// print all the food items with lowest cab to highest
function lowtohighcab() {
    return fooddata.sort((a, b) => a.cab - b.cab);
}
console.log("print all lowest cab content to highest items");
console.log(lowtohighcab());












