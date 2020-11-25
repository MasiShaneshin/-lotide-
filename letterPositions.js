const letterPositions = function(sentence,string) {


  const results = [];
  let array = sentence.split('');
  let element = string;
      
  let idx = array.indexOf(element);
      
  while (idx !== -1) {
    results.push(idx+1);
     idx = array.indexOf(element, idx + 1);
  }
  return results;
}
console.log(letterPositions("hello","e" ));
