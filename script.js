// --------------------------------------------------------------------------------
// 1. VARIÁVEIS GLOBAIS 
// --------------------------------------------------------------------------------

// Procura pelos os elementos com o ID "txt-nova-tarefa" no documento HTML
const  txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
// Procura pelos os elementos com o ID "btn-nova-tarefa" no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
// Procura pelo elemento com o ID "lista-tarefas" no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");


// Carrega o audio reproduzido ao concluir uam tarefa
const audioConcluir = new Audio(' sound/gmae.wav');

// --------------------------------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA 
// --------------------------------------------------------------------------------

function iniciaTodo() {
    // Alert("Olá mundo!");
    // Associa função ao evento de clicar no botão de "Adicionar" nova tarefa 
    btn_nova_tarefa.addEventListener("click", AdicionarTarefa);
    // Associa funçõa "adicionarTarefaEnter()" ao evento de pressionar qualquer tecla
    // No campo de "Adicionar nova tarefa" 
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter);
    
}

function AdicionarTarefa() {
    // Se a caixa de texto "Adicionar nova tarefa" não está vazia
    // .trim() remove espaços em brancos do começo  
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
        <div> 
            <button class="btn btn-success btn-sm me-2" onclick="concluirTarefa(this)">Concluir</button>
            <button class="btn btn-danger btn-sm">Excluir</button>
        </div>
    `;
        // Cria um novo item de lista
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        // Adiciona o texto digitado na caixa de texto e os botões para concluir e excluir a tarefa.
        // "span" permito aplicar formações em linha 
        // "W-75" limite o nome da tarefa à 75% do tamanho da linha, deixando 25% do tamanho restante reservando para os botões 
        // "text-truncate" corta e adiciona reticôncia (três pontos ...) em nomes de tarefas que exediam 75% do tamanho da linha 
        item.innerHTML = '<span class="w-75 text-truncate">' + txt_nova_tarefa.value + "</span>" + btn_item;
        
        // adiciona o item a lista de tarefas
        lista_tarefas.append(item);
    }
    
    // Limpa o campo de texto de "Adicionar nova tarefa" após adicionar a tarefa a lista 
    txt_nova_tarefa.value = "";
    // Seleciona o campo "Adicionar nova tarefa" após adicionar a tarefa a lista 
    txt_nova_tarefa.focus();
}
function adicionarTarefaEnter(evento) {
    // Se a tecla pressionada for igual a "Enter"
    if (evento.key == "Enter") {
        // Chama a função JavaScript "adicionarTarefa()"
        AdicionarTarefa();
    }
}

function concluirTarefa(elemento) {
    // Reproduzir o audio ao clicar o botão de "Concluir"
    audioConcluir.play();
    
    //Joga confettis na tela
    confetti();
}
// --------------------------------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO
// --------------------------------------------------------------------------------

iniciaTodo();
