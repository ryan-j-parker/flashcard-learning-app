// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const codeNameInput = document.getElementById('code-name-input');
const codeNameDisplay = document.getElementById('code-name-display');
const codeNameButton = document.getElementById('code-name-button');

let codeNames = [];

codeNameButton.addEventListener('click', () => {
    const newCodeName = codeNameInput.value;
    codeNames.push(newCodeName);
    displayCodeNames();
    codeNameInput.value = '';
});

function displayCodeNames() {
    codeNameDisplay.textContent = '';

    for (let codeName of codeNames) {
        const codeNameEl = document.createElement('p');
        codeNameEl.textContent = codeName;
        codeNameEl.classList.add('code-names-class');
        codeNameDisplay.append(codeNameEl);
    }
}


