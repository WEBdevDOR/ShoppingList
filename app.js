// Variables
const interface = document.querySelector('.interface');
const input = document.querySelector('input');
const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#clear');
const list = document.querySelector('.list');

// Functions
const addToList = function() {
  if (input.value !== '') {
    const newLi = document.createElement('li');
    newLi.append(input.value);
    list.append(newLi);
    input.value = '';
  }
};
const clearList = function() {
  list.innerText = '';
}

// Events
addBtn.addEventListener('click', addToList);
input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    addToList();
  }
})
clearBtn.addEventListener('click', clearList);
list.addEventListener('click', function(e) {
  const current = e.target;
  current.remove();
})