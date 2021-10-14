import { textNodes } from '../../my-game/game.js';

const textElement = document.getElementById('text');
const inventoryElement = document.getElementById('inventory-list');
const optionButtonsElement = document.getElementById('options');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {

  //return text node by index
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

  //remove previous paragraphs
  while (textElement.firstChild) {
    textElement.removeChild(textElement.firstChild)
  }

  //remove previous option buttons
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  //remove previous inventory items
  while (inventoryElement.firstChild) {
    inventoryElement.removeChild(inventoryElement.firstChild)
  }

  //set new paragraphs
  textNode.paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.innerText = paragraph.text;
    textElement.appendChild(p);
  })

  //set new option buttons
  textNode.options.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = option.text;
    if (enabledOption(option)) {
      button.addEventListener('click', () => selectOption(option));
    } else {
      button.disabled = true;
    }
    optionButtonsElement.appendChild(button);
  })

  //show inventory items
  let inv = Object.keys(state).filter(function(k){return state[k]});
  if(!inv.length){
    const li = document.createElement('li');
    li.innerText = 'Empty';
    inventoryElement.appendChild(li);
  } else {
    inv.forEach(i => {
      const li = document.createElement('li');
      li.innerText = i;
      inventoryElement.appendChild(li);
    })
  } 
}

function enabledOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

startGame();