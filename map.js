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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}





const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

//assertArraysEqual(map("ground","g"));
//assertArraysEqual(map(words,"ground"),"g");
assertArraysEqual(words,["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);