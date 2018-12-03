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

### ALUNO:
		GET:
			Pegar todos os Alunos de um Curso pelo nome do curso:
			url: localhost:3000/Students/getAllStudentsFromCourse/"Nome do curso"
			Exemplo: localhost:3000/Students/getAllStudentsFromCourse/Ciência da Computação

			Pegar todos os Alunos de um Curso pelo id do curso:
			url: localhost:3000/Students/getAllStudentsFromCourse/"id_curso"
			Exemplo: localhost:3000/Students/getAllStudentsFromCourseId/0
			obs: "id_curso" é um int;

			Busca o aluno pela matricula:
			url: localhost:3000/Students/getStudentByMatricula/"matricula"
			Exemplo: localhost:3000/Students/getStudentByMatricula/1520xxxx

			Busca o aluno pelo cpf:
			url: localhost:3000/Students/getStudentByMatricula/"cpf"

		POST:
			Enviar um novo aluno para o bd;
			url: localhost:3000/Students/addNewStudent/
			Colocar no body utilizando o padrão form-data os seguintes parametros:
				- matricula; // matricula do aluno
				- id_curriculo; // id do curriculo que o aluno está cadastrado
				- nome_aluno;
				- email;
				- senha_aluno;
				- cpf_aluno;

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

		Pegar todas as solicitações de todos alunos:
		url: localhost:3000/Requests/getAllRequests
		RETORNA: nome_aluno, matricula, data_solic, categoria, horas_info, pdf, nome_atividade, status, data_correcao, horas_aceitas e resp_correcao

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
		Colocar no body utilizando o padrão form-data os seguintes parametros:
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
		Colocar no body utilizando o padrão form-data os seguintes parametros:
			- id_curriculo; // id do curriculo do curso do aluno
			- perg_duv; // pergunta
			- resp_duv; // resposta
### Correcao:
	POST:
