let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area-lista');

function addTarefa(){
    //pegar o valor digitado no input text
    let valorInput = input.value;

    //se não for vazio, nem nulo, nem indefinido
    if((valorInput !== "") && (valorInput!== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div id=${contador} class="item">
        <div class="item-icone" onclick="marcarTarefa(${contador})">
        <span class="material-symbols-outlined">radio_button_checked</span>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-rounded">close</span>Deletar</button
        </div>
    </div>`;

    //adicionar novo item no main
    main.innerHTML += novoItem

    //zerar o valor do input
    input.value = "";
    input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");


    if(classe == "item"){
        item.classList.add('clicado');

        item.parentNode.appendChild(item);
    }
    else{
        item.classList.remove("clicado");
    }
}

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})