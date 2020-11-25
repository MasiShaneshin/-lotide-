function countLetters(str1) {
  var uchars = {};
  str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
  return uchars;
  }
  console.log(countLetters("The quick brown fox jumps over the lazy dog"));