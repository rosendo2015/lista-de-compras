form = document.getElementById("form");
input = document.getElementById("add-item");
ul = document.getElementById("items");

let listCompras = [
    
    {id: 1, produto: 'Pão de forma'},
    {id: 2, produto: 'Café preto'},
    {id: 3, produto: 'Suco de laranja'},
    {id: 4, produto: 'Bolacha'}
    
]

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
            <li class="item">
            <div>
                <input type="checkbox">${item.produto}
            </div>
            <div>
            <a href="#" onclick="editarItem(${item.id})">
                <img src="assets/pencil.svg" alt="Editar">
            </a>
            <a href="#" onclick="deletarItem(${item.id})">
                <img src="assets/trash.svg" alt="lixeira">
            </a>
            </div>
            </li>
            `
        )
    })
    ul.innerHTML = html;
}
function editarItem(id){
    let result = listCompras.find(item => item.id === id);
    let html = `<input type="text" id="textParaEditar" value="${result.produto}">
        <button onclick=editarDados(${id}) id="btnEditar">Editar item</button>`;

        let editarDiv = document.getElementById("editar");
        editarDiv.innerHTML = html;
    
}
function editarDados(id){
    let inputEditar = document.getElementById("textParaEditar").value;
    let result = listCompras.find(item => item.id === id);
    result.produto = inputEditar;
    mostrarLista();
}
function deletarItem(id){
    let novaLista = listCompras.filter(item => item.id !== id);
    console.log(novaLista);
    listCompras = novaLista;

    mostrarLista();
}