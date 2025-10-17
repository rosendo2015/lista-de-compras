const addInput = document.getElementById('add-input');
const form = document.getElementById('add-item');



const items = ["Pão de forma","Café preto","Suco de laranja","Bolacha"];




form.addEventListener('submit', (event) => {
    event.preventDefault();
})
addInput.addEventListener('input', () => {
    const value = addInput.value.trim();
    console.log(value)
})
function renderItems() {

}