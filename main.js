//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(str, dogNames) {
  for (let name of dogNames) {
    if (str.toLowerCase().includes(name.toLowerCase())) {
      console.log(`Matched ${name}`);
    } else console.log("No Match");
  }
}

//Call method here with parameters
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  arrCopy = [...arr];
  for (let idx = arr.length - 1; idx >= 0; idx--) {
    arrCopy.splice(idx, 0, "even index");
  }
  return arrCopy;
}
console.log(replaceEvens(arr));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// codewars1

// def narcissistic( value ):
//     arr = [int(num) for num in list(str(value))]

//     return sum([num ** len(arr) for num in arr]) == value

function narcissistic(value) {
  arr = String(value).split("");
  return (
    arr.reduce((acc, num) => {
      return acc + Number(num) ** arr.length;
    }, 0) == value
  );
}

console.log(narcissistic(371));

// codewars2

// def spin_words(sentence):
//     sentence = sentence.split(' ')
//     arr = []
//     arr = [word[::-1] if len(word) >= 5 else word for idx, word in enumerate(sentence)]
//     return ' '.join(arr)

function spin_words(sentence) {
  sentence = sentence.split(" ");
  return sentence
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

console.log(spin_words("Hello world this is a test"));
