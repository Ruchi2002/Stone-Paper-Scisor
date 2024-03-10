let score = 0;
const scorediv = document.getElementById("Score");

function determineWinner(user, computer) {
  if (user == computer) {
    return {
      message: "It's a draw",
      score: 0,
    };
  } else if (
    (user == "rock" && computer == "scissors") ||
    (user == "scissors" && computer == "paper") ||
    (user == "paper" && computer == "rock")
  ) {
    return {
      message: "You Are Winner!",
      score: 10,
    };
  } else if (
    (computer == "rock" && user == "scissors") ||
    (computer == "scissors" && user == "paper") ||
    (computer == "paper" && user == "rock")
  ) {
    return {
      message: "Computer Are Winner!",
      score: 0,
    };
  } else {
    return "Invalid input! Please enter rock, paper, or scissor.";
  }
}
function showModal() {
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".rules-img").classList.add("showrules-img");
}

function closeModal() {
  console.log("hello");
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(".rules-img").classList.remove("showrules-img");
}

const ruleButton = document.querySelector(".rules");
ruleButton.addEventListener("click", showModal);

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", closeModal);

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");

const inputMove = document.querySelectorAll(".input_move");
let userInput;
inputMove.forEach((item) =>
  item.addEventListener("click", (e) => {
    let userPicked = e.target.id;
    console.log(userPicked);
    let computerPicked;
    const userPickedImage = document.createElement("img");
    step1.style.display = "none";
    step2.style.display = "block";

    userPickedImage.src = e.target.currentSrc;
    userPickedImage.style.width = "200px";
    userPickedImage.style.height = "200px";
    userPickedImage.style.objectFit = "cover";
    userPickedImage.classList.add(
      "bg-white",
      "p-10",
      "border-purple-500",
      "border-[16px]",
      "rounded-[50%]"
    );

    const userChoiceElement = document.querySelector(".user_choice");
    const computerChoiceElement = document.querySelector(".computer_choice");
    const computerHead = document.querySelector(".computer_head");
    userChoiceElement.append(userPickedImage);

    function getRandomImage() {
      const randomIndex = Math.floor(Math.random() * inputMove.length);

      const imageUrl = inputMove[randomIndex].currentSrc;
      let imgId = inputMove[randomIndex].id;
      computerPicked = imgId;
      console.log(computerPicked);
      computerChoiceElement.innerHTML = `<img id="${imgId}" class="bg-white p-10 border-[16px] border-orange-500 rounded-[50%] w-[200px] h-[200px]" src="${imageUrl}" alt="Computer's Choice">`;

      computerHead.innerHTML = "Computer Choosing......";
    }

    let intervalId = setInterval(getRandomImage, 300);
    setTimeout(function () {
      computerHead.innerHTML = "Computer Picked";
      clearInterval(intervalId);
      const result = determineWinner(userPicked, computerPicked);
      score = score + result.score;
      document.getElementById("result").innerHTML = result.message;
      scorediv.textContent = score;
    }, 2000);
  })
);

document.getElementById("play_again").addEventListener("click", function () {
  window.location.reload();
});
