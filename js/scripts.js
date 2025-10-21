form = document.getElementById("form");
editar = document.getElementById("editar");
input = document.getElementById("add-item");
ul = document.getElementById("items");
notificacao = document.querySelector(".notificacao");


let listCompras = [
    
    {id: 1, produto: 'Pão de forma'},
    {id: 2, produto: 'Café preto'},
    {id: 3, produto: 'Suco de laranja'},
    {id: 4, produto: 'Bolacha'}
    
]

form.addEventListener("submit", function(event){
    event.preventDefault()
})

mostrarLista()   
function addItemList(){
        if(input.value === "") {
            return
        }else{            
            let = itemObj = {
                id: listCompras.length + 1,
                produto: input.value
            }
    listCompras.unshift(itemObj) 
    input.value = ""    
     // Cria apenas o HTML do novo item
  let novoItemHTML = `
    <li class="item">
      <div>
        <input type="checkbox" onchange="riscarTexto(${itemObj.id})">
        <a href="#" onclick="editarItem(${itemObj.id})">
          <span id="texto-${itemObj.id}">${itemObj.produto}</span>
        </a>
      </div>
      <div>
        <a class="link" href="#" onclick="deletarItem(${itemObj.id})">
          <img src="assets/trash.svg" alt="lixeira">
        </a>
      </div>
    </li>
  `;

  ul.insertAdjacentHTML("afterbegin", novoItemHTML);
  
}
}
function mostrarLista(){
    let html = "";
    listCompras.map(item =>{
        return(

            html += `
            <li class="item">
            <div>
                <input type="checkbox" onchange="riscarTexto(${item.id})">
                <span onclick="editarItem(${item.id})" id="texto-${item.id}"><a href="#">${item.produto}</a></span>
                
            </div>
            <div>
            <a class="link" href="#" onclick="deletarItem(${item.id})">
                <img  src="assets/trash.svg" alt="lixeira">
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
    <button onclick=editarDados(${id}) id="btnEditar">
        Editar item
    </button>`;
    
    let editarDiv = document.getElementById("editar");
    editarDiv.innerHTML = html;

    // Oculta o formulário de inserção e exibe o de edição
  form.style.display = "none";
  editar.style.display = "flex";

    
    // Desabilita todos os ícones de exclusão
    let botoesExcluir = document.querySelectorAll(".link");
    botoesExcluir.forEach(botao => {
        botao.classList.add("disabled");
    });

}
function editarDados(id){
    let inputEditar = document.getElementById("textParaEditar").value;
    let result = listCompras.find(item => item.id === id);
    result.produto = inputEditar;
    
    // Atualiza apenas o texto do item
  let spanTexto = document.getElementById(`texto-${id}`);
  if (spanTexto) {
    spanTexto.textContent = inputEditar;
  }

   // Exibe o formulário de inserção e oculta o de edição
  form.style.display = "flex";
  editar.style.display = "none";



    // Reabilita os ícones de exclusão
    let botoesExcluir = document.querySelectorAll(".link");
    botoesExcluir.forEach(botao => {
        botao.classList.remove("disabled");
    });

}
function deletarItem(id){
    listCompras = listCompras.filter(item => item.id !== id);

  let li = document.querySelector(`#texto-${id}`).closest("li");
  if (li) {
    li.remove();
  }
const notificacao = document.querySelector(".notificacao");
  notificacao.classList.remove("hide");
  notificacao.style.display = "flex";
  fecharNotificacao()
}
function fecharNotificacao() {
setTimeout(() => {
    notificacao.style.display = "none";
    notificacao.classList.add("hide");
  }, 5000); // 5000 milissegundos = 5 segundos

  const notificacao = document.querySelector(".notificacao");
  notificacao.classList.add("hide");
}

function fecharNotificacaoManual(){
notificacao.style.display = "none";
notificacao.classList.add("hide");
}

function riscarTexto(id) {
  const texto = document.getElementById(`texto-${id}`);
  const checkbox = event.target;

  if (checkbox.checked) {
    texto.classList.add("riscado");
  } else {
    texto.classList.remove("riscado");
  }
}
