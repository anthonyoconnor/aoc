
const popcornWords = [
  "I",
  "a",
  "to",
  "at",
  "it",
  "the",
  "is",
  "go",
  "in",
  "like",
  "and",
  "my",
  "you",
  "on",
  "can",
  "me",
  "went",
  "we",
  "play",
  "day",
  "am",
  "fun",
  "with",
  "have",
  "up",
  "was",
  "he",
  "will",
  "had",
  "she",
]

let words = [...popcornWords];


const updateWord = () => {

  if(words.length == 0) {
    words = [...popcornWords];
  }
  console.log(popcornWords);
  console.log(words);
  let element = document.getElementById("word");
  let word = words[Math.floor(Math.random() * words.length)];

  const index = words.indexOf(word);
  if (index > -1) {
    words.splice(index, 1);
  }

  if(words.length == 0) {
    element.innerHTML = "Well done!";
  } else {
    element.innerHTML = word;
  }

}
document.getElementById("center").addEventListener("click", (e) => {
  updateWord();
});


updateWord();

