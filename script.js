let diceElement = document.getElementById('dice');
let rollButton = document.getElementById('roll-button');
let rollHistory = document.getElementById('roll-history');
let historyList = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 5 + 1);

  if (rollResult == 1) {
    diceElement.innerHTML = '&#x2680';
  } else if (rollResult == 2) {
    diceElement.innerHTML = '&#x2681;';
  } else if (rollResult == 3) {
    diceElement.innerHTML = '&#x2682;';
  } else if (rollResult == 4) {
    diceElement.innerHTML = '&#x2683;';
  } else if (rollResult == 5) {
    diceElement.innerHTML = '&#x2684;';
  }
  historyList.push(rollResult);
  updateRollHistory();
}

function rollD(num) {
  const diceFaces = ['&#x2680;', '&#x2681;', '&#x2682;', '&#x2683;', '&#x2684;'];
  return diceFaces[num - 1] || '';
}

function updateRollHistory() {
  rollHistory.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${rollD(historyList[i])}</span>`;
    rollHistory.appendChild(listItem);
  }
}

rollButton.addEventListener('click', function() {
  diceElement.classList.add('roll-animation');
  setTimeout(()=>{
    diceElement.classList.remove('roll-animation');
    rollDice();
  }, 1000)
})