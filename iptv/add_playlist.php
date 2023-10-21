<!DOCTYPE html>
<html>
<head>
	<title>Exemplo de importação e gravação de CSV para select</title>
</head>
<body>
	<label for="select-dados">Selecione um item:</label>
	<select id="select-dados"></select>

	<form id="form-gravar">
		<label for="nome">Nome:</label>
		<input type="text" id="nome" name="nome" required>

		<label for="url">URL:</label>
		<input type="text" id="url" name="url" required>

		<button type="submit">Adicionar</button>
	</form>

	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script>
		var url = "dados.csv";
		var select = document.getElementById("select-dados");

		function carregarDados() {
			fetch(url)
				.then(response => response.text())
				.then(text => {
					var rows = text.split("\n");
					var options = "";
					for (var i = 1; i < rows.length; i++) {
						var columns = rows[i].split(",");
						var nome = columns[0];
						var url = columns[1];
						options += '<option value="' + url + '">' + nome + '</option>';
					}
					select.innerHTML = options;
				})
				.catch(error => console.error(error));
		}

		carregarDados();

		$("#form-gravar").submit(function(event) {
			event.preventDefault();
			var form = $(this);
			var url_gravar = form.attr("action");
			var dados = form.serialize();
			$.post(url_gravar, dados, function(data) {
				select.innerHTML = data;
				form.trigger("reset");
			});
			carregarDados();
		});
	</script>
</body>
</html>
