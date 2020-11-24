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
return false
  //console.log("It is not match");
  }
  }

};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
  