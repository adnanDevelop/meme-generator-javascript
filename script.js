
let quoteText = document.getElementById("quote-text");
let button = document.querySelector(".btn-primary");
let authorName = document.querySelector(".name");
let copyBtn = document.querySelector(".copyBtn");
let soundBtn = document.querySelector(".soundBtn");
let linkedinBtn = document.querySelector(".linkedinBtn");

const randomQuote = async () => {       //GETTING DATA FROM API
 //ADDING LOADING ANIMATION 
  button.innerText = "Loading Quote...";
  quoteText.innerText = "Loading Quote...";
  button.classList.add("loading");

  // USING TRY AND CATCH TO GET DATA OR ERROR 
  try {
    const data = await fetch(`https://api.quotable.io/random`); //it return 1 quotes at a time
    // const data =await fetch(`https://api.quotable.io/quotes/random?limit=50`);  // it return 50 quotes at a time
    const response = await data.json();
    quoteText.innerText = response.content;
    authorName.innerText = response.author;
    button.innerText = "New Quote";
    button.classList.remove("loading");
  } catch (error) {
    console.log(error);
  }
};

randomQuote();

const playSound = () => {
  //function for speaking quote
  const occurance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(occurance);
};

const copyQuote = () => navigator.clipboard.writeText(quoteText.innerHTML); // function for copyging quote



button.addEventListener("click", randomQuote);
soundBtn.addEventListener("click", playSound);
copyBtn.addEventListener("click", copyQuote);