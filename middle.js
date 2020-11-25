/*
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
*/
  const middle = function(array) {
  const mid=[];
  if(array.length<=2){
    console.log(mid);
  }
else if (array.length%2 != 0 ){
  console.log(array[(array.length/2)-1/2]) ;

}

else if (array.length%2 == 0 ){
  console.log(array[(array.length/2)]);
  console.log (array[(array.length/2)-1]);


{


}

  }}
  middle([1])
  middle([1, 2, 3]) // => [2]
 middle([1, 2, 9, 4, 5])//9
middle([1, 2, 7, 4]); // => [7, 2]
middle([1, 2, 3, 4, 5, 6]);  // => [4, 3]
