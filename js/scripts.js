const addInput = document.querySelector('.add-input');
const form = document.getElementById('add-item');
const list = document.getElementById('items');
const button = document.querySelector('#btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

button.addEventListener('click', addItems)

function addItems() {
    if (addInput.value.trim() === '') {
        alert('Favor digitar um item válido.');
        return;
    }else {
    const item = `<li class="item"><div><input type="checkbox"><span>`+addInput.value.trim()+`</span></div><a href="#"><img src="../assets/trash.svg"></a></li>`;
    
    list.insertAdjacentHTML('afterbegin', item);
    addInput.value = '';
    }
}