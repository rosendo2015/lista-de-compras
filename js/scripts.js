form = document.getElementById("form");
input = document.getElementById("add-item");
ul = document.getElementById("items");

let listCompras = [
    {id: 1, produto: 'Pão de forma'},
    {id: 2, produto: 'Café preto'},
    {id: 3, produto: 'Suco de laranja'},
    {id: 4, produto: 'Bolacha'}]

form.addEventListener("submit", function(event){
    event.preventDefault()
})

function addItemList(){
    let = itemObj = {
        id: listCompras.length + 1,
        produto: input.value
    }
    listCompras.unshift(itemObj) 
    input.value = ""    
    mostrarLista()   
}
function mostrarLista(){
    let html = "";
    listCompras.map(item =>{
        return(

            html += `
            <li>
            <div>
                <input type="checkbox">${item.produto}
            </div>
            <div>
            <button onclick="editarItem(${item.id})">
                <img src="assets/pencil.svg" alt="Editar">
            </button>
            <button onclick="deletarItem(${item.id})">
                <img src="assets/trash.svg" alt="lixeira">
            </button>
            </div>
            </li>
            `
        )
    })
    ul.innerHTML = html;
}
function editarItem(id){
    
    item(id);
}
function deletarItem(id){
    let novaLista = listCompras.filter(item => item.id !== id);
    console.log(novaLista);
    listCompras = novaLista;

    mostrarLista();
}