import { credits, textNodes } from '../../my-game/game.js';

const textElement = document.getElementById('text');
const inventoryElement = document.getElementById('inventory');
const optionButtonsElement = document.getElementById('options');

let state = {};

function startGame() {
  state = {};

  //state = Object.assign(state, {itemTeste:true});

  showTextNode(1);
}

function showTextNode(textNodeIndex) {

  //return text node by index
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

  //set new paragraphs
  textElement.innerHTML = "";
  textNode.paragraphs.forEach(paragraph => {
    const p = document.createElement('p');
    p.innerText = paragraph.text;
    textElement.appendChild(p);
  })

  //set new option buttons
  optionButtonsElement.innerHTML = "";
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
  inventoryElement.innerHTML = "";

  let h3 = document.createElement('h3');
  h3.innerText = "Your Items";
  inventoryElement.appendChild(h3);

  let ul = document.createElement('ul');
  inventoryElement.appendChild(ul);

  let inv = Object.keys(state).filter(function(k){return state[k]});
  if(inv.length){
    inv.forEach(i => {
      let li = document.createElement('li');
      li.innerText = i;
      ul.appendChild(li);
    })
   } else {
    let li = document.createElement('li');
    li.innerText = 'Empty';
    ul.appendChild(li);
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

function showCredits(){
  let creditsElement = document.getElementById('game-credits');
  let p = document.createElement('p');
  p.innerText = `${credits.author} \n ${credits.description}`;
  creditsElement.appendChild(p);
  Object.keys(credits.links).forEach(key => {
    let a = document.createElement('a');
    var link = document.createTextNode(key);
    a.appendChild(link); 
    a.title = key; 
    a.href = credits.links[key];    
    creditsElement.appendChild(a);
  })
}

window.onload = function() { 
  document.title = credits.title;
  document.getElementById('game-title').innerHTML = credits.title;
  showCredits()
  startGame();
}