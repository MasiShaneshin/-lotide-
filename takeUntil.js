
const eqArrays = function(f_arr, s_arr) {

  //f_arr=[];
  //s_arr=[];
  if (f_arr.length !== s_arr.length){
  
    return false;
  }
  for (var i =0 ; i< f_arr.length; i++ ){
    if (f_arr[i] === s_arr[i]){
     // console.log("it is true");
      return true
    }
    
    else{
     //return false
    //console.log("It is not match");
    }
    }
  
  };
  
  

const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`)
    }
    else {
        console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`)
    }
}
const takeUntil = function(array, callback) {
 const results = [];
  for (let item of array) {
    if ( !callback(item) ){
      results.push(item);      
  }else break;
    
     
  
}
return results; 
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ] );