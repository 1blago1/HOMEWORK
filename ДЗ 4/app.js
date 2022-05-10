дз4
function stringCut(str) {
  let str1 = str;
  return str1.slice(0, 30) + "...";
}
console.log(stringCut("But you have no right to call me a murderer"));
console.log(stringCut("Because they could stand that these were not monsters"));
console.log(stringCut("And I want to remember it. I never want to forget it"));

function invert(str) {
  let newStr = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}
console.log(invert("WTF"));
console.log(invert("Be my Valentine"));
console.log(invert("C&C Red Alert 3"));




