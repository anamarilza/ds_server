# ds_server
# Servidor do trabalho de DS

## Instruções de uso:
Requisitos: mysql, nodejs e npm instalados;

### LEMBREM DE VERIFICAR A PASSWORD
### METODOS POST DEVEM SER UTILIZADOS NO FORMATO FORM-DATA
mysql deve estar com o database criado conforme o arquivo dbconnection.js

### Para carregar o mysql com o banco de dados usar o comando (o database vazio deve existir no mysql):
	mysql -u root -p sistemaHoras < dump.sql


### Entrar no diretório e lançar o comando:
	npm start

Segue a lista de urls e parametros para cada tabela;
### ATIVIDADE:

	 GET:
		Pegar uma Atividade pelo ID dela:
		url: localhost:3000/Activities/getActivityById/"id_atividade"
		obs: "id_atividade" é um int;

		Pegar todas Atividades de um Curriculo:
		url: localhost:3000/Activities/getAllActivities/"id_curriculo"
		obs: "id_curriculo" é um int;

### SOLICITACAO:
	GET:
		Pegar todas as solicitações de um aluno:
		url: localhost:3000/Requests/getAllStudentRequests/"matricula"
		obs: "matricula" é um int;
		RETORNA: data_solic, categoria, horas_info, pdf, nome_atividade, status, data_correcao, horas_aceitas e resp_correcao

		Pegar o arquivo enviado na solicitação:
		url: localhost:3000/Requests/getRequestFileById/"pdf"
		obs: "pdf" é uma string que identifica o arquivo;

	POST:
		Enviar uma solicitação para o bd;
		url: localhost:3000/Requests/addNewRequest/
		Colocar no body utilizando o padrão x-www-form-urlenconded os seguintes parametros:
			- matricula; // matricula do aluno
			- id_atividade; // id da atividade que o aluno informou
			- horas_info; // número de horas informadas pelo aluno
			- pdf // arquivo pdf
### FAQ:
	GET:
		Pegar todas as Duvidas de um curriculo:
		url: localhost:3000/Questions/getAllQuestionsFromCurriculum/"id_curriculo"
		obs: "id_curriculo" é um int;

		Pegar uma Duvida pelo ID dela:
		url: localhost:3000/Questions/getQuestionById/"id_perg"
		obs: "id_perg" é um int;
	POST:
		Enviar uma nova Duvida para o bd;
		url: localhost:3000/Questions/addNewQuestion/
		Colocar no body utilizando o padrão x-www-form-urlenconded os seguintes parametros:
			- id_curriculo; // id do curriculo do curso do aluno
			- perg_duv; // pergunta
			- resp_duv; // resposta
