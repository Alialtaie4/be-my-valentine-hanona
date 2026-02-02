let messages = [
  "Really sure?",
  "Think again",
  "Are you sure?",
  "Last chance 😢"
];

let index = 0;

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.querySelector(".yes-button");

  noBtn.textContent = messages[index];
  index = (index + 1) % messages.length;

  let size = parseFloat(
    window.getComputedStyle(yesBtn).fontSize
  );

  yesBtn.style.fontSize = (size * 1.3) + "px";
}

function handleYesClick() {
  alert("YAY 💖 You said YES!");
}
