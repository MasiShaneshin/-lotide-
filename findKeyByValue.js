const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}

for (var i =0;i<bestTVShowsByGenre.length;i++){
if(Object.keys){
  console.log(Object.keys(bestTVShowsByGenre)); 

}
else (console.log("undefined)"));
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

console.log(Object.keys(bestTVShowsByGenre)); 
console.log(getKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(getKeyByValue(bestTVShowsByGenre, "That 70s Show"));