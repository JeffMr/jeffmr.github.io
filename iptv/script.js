//Inicializando o player de vídeo e alterando a URL de origem com base na opção selecionada
var player = videojs("my-video"); // Selecionando o player de vídeo com ID 'my-video'
var select = document.getElementById("iptv-url"); // Selecionando a lista suspensa com ID 'iptv-url'
select.addEventListener("change", function () {
    // Adicionando um listener de evento para a lista suspensa 'select'
    var source = select.value; // Armazenando o valor selecionado pelo usuário na variável 'source'
    player.src({
        // Configurando o atributo 'src' do player de vídeo com base na opção selecionada
        src: source, // Definindo a URL de origem com base na opção selecionada
        type: "application/x-mpegURL" // Definindo o tipo de arquivo de vídeo como MPEG
    });
    player.play(); // Reproduzindo o vídeo após a alteração do atributo 'src'
});
function carregarDados() {
    // Buscando a lista de opções do arquivo 'dados.csv'
    var data = "https://explorer.jeffmr.com/exemplos/iptv/-dados.csv"; // Armazenando o nome do arquivo 'dados.csv' na variável 'data'
    var select = document.getElementById("iptv-url"); // Selecionando novamente a lista suspensa com ID 'iptv-url'

    fetch(data) // Utilizando a função fetch para buscar o conteúdo do arquivo 'dados.csv'
        .then((response) => response.text()) // Convertendo a resposta da solicitação em texto
        .then((text) => {
            // Processando o texto retornado
            var rows = text.split("\n"); // Separando o texto em linhas
            // remove a última linha do array, se ela for vazia
            if (rows[rows.length - 1] === "") {
                rows.pop();
            } else {
            }
            var options = ""; // Iniciando a variável que irá armazenar as opções da lista suspensa
            for (var i = 1; i < rows.length; i++) {
                // Looping pelas linhas do arquivo 'dados.csv'
                var columns = rows[i].split(","); // Separando cada linha em colunas com base na vírgula como separador
                var nome = columns[0]; // Armazenando o primeiro item de cada linha na variável 'nome'
                var url = columns[1]; // Armazenando o segundo item de cada linha na variável 'url'
                options += '<option value="' + url + '">' + nome + "</option>"; // Adicionando uma nova opção à variável 'options' com base nos valores armazenados em 'nome' e 'url'
            }
            select.innerHTML = options; // Configurando o conteúdo HTML da lista suspensa com base nas opções geradas
        })
        .catch((error) => console.error(error)); // Capturando e registrando quaisquer erros que possam ocorrer durante o processamento
}
carregarDados();
