const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = function(object1, object2){
if (Object.keys(object1).length === Object.keys(object2).length){
  for(let key of Object.keys(object1) ){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
          if (!eqArrays(object1[key],object2[key])){
           return false;       
          }
      }
      
  }
  return true;
}
return false;    
};