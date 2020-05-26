
const words = [
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


const updateWord = () => {
  let element = document.getElementById("word");
  element.innerHTML = words[Math.floor(Math.random() * words.length)];;
}
document.getElementById("next").addEventListener("click", (e) => {
  updateWord();
});


updateWord();

