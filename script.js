// Name: Ryan Schmelter
// Code Along Week 10
// Dice roller functions

function toggleDieHold(id) {
  // Get data-active attribute and toggle it
  let currentActiveStatus = document
    .getElementById(id)
    .getAttribute("data-active");
  let newStatus = currentActiveStatus === "true" ? false : true;
  document.getElementById(id).setAttribute("data-active", newStatus);
  // Apply the class according to the attribute
  if (newStatus) {
    document.getElementById(id).classList.remove("held");
  } else {
    document.getElementById(id).classList.add("held");
  }
}

function rollDice() {
  // Get all active dice
  let allActiveDice = document.querySelectorAll('[data-active="true"]');
  //Roll dice and update src and alt
  for (let die of allActiveDice) {
    let num = Math.floor(Math.random() * 6) + 1;
    die.setAttribute("src", `images/${num}.png`);
    die.setAttribute("alt", `Die ${num}`);
  }
}
