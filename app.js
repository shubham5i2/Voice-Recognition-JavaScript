const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

var greetings = [
  "I am good and how are you",
  "Doing great and what about you",
  "Dont ask me stupid questions",
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Please speak...");
};

recognition.onresult = function (event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutMySpeech(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutMySpeech(message) {
  var speech = new SpeechSynthesisUtterance();

  if (message.includes("how are you")) {
    var finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    window.speechSynthesis.speak(speech);
  } else {
    speech.text = "I dont know what you are speaking";
    window.speechSynthesis.speak(speech);
  }
}
