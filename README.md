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
		RETORNA:
			- id_atividade, type: int;
			- id_curriculo, type: int;
			- nome_atividade, type: string;
			- id_categoria, type: int;
			- horas_fixo: bool; // DEFINE SE A ATIVIDADE POSSUI TEMPO FIXO DE HORAS, CASO SEJA VERDADE nro_horas_fixo DEVE SER ENVIADO PARA O BANCO QUANDO O ALUNO SUBMETER UMA ATIVIDADE DESSE TIPO
			- max_horas: int; // MAXIMO DE HORAS POSSIVEIS NESSA ATIVIDADE
			- nro_horas_fixo: int. // NRO DE HORAS FIXO 

		Pegar todas Atividades de um Curriculo:
		url: localhost:3000/Activities/getAllActivities/"id_curriculo"
		obs: "id_curriculo" é um int;

### SOLICITACAO:
	GET:

		Pegar todas as solicitações de todos alunos:
		url: localhost:3000/Requests/getAllRequests
		RETORNA:
			- Aluno.nome_aluno, type: string;
			- Aluno.matricula, type: int;
			- Solicitacao.data_solic, type: Date;
			- Categoria.nome_categoria, type: string;
			- Solicitacao.horas_info, type: int;
			- Solicitacao.pdf, type: string;
			- Atividade.nome_atividade, type: string;
			- Correcao.status, type: bool;
			- Correcao.data_correcao, type: Date;
			- Correcao.horas_aceitas, type: int;
			- Correcao.resp_correcao, type: string.

		Pegar todas as solicitações de um aluno:
		url: localhost:3000/Requests/getAllStudentRequests/"matricula"
		obs: "matricula" é um int;
		RETORNA: 
			- Aluno.nome_aluno, type: string;
			- Solicitacao.data_solic, type: Date;
			- Categoria.nome_categoria, type: string;
			- Solicitacao.horas_info, type: int;
			- Solicitacao.pdf, type: string;
			- Atividade.nome_atividade, type: string;
			- Correcao.status, type: bool;
			- Correcao.data_correcao, type: Date;
			- Correcao.horas_aceitas, type: int;
			- Correcao.resp_correcao, type: string.


		Pegar o arquivo enviado na solicitação:
		url: localhost:3000/Requests/getRequestFileById/"pdf"
		obs: "pdf" é uma string que identifica o arquivo;
		Retorna o arquivo File.

	POST:
		Enviar uma solicitação para o bd;
		url: localhost:3000/Requests/addNewRequest/
		Colocar no body utilizando o padrão form-data os seguintes parametros:
			- key: matricula, type: int; // matricula do aluno
			- key: id_atividade, type: int; // id da atividade que o aluno informou
			- key: horas_info, type: int; // número de horas informadas pelo aluno
			- key: pdf , type: File // arquivo pdf
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
			- key: id_curriculo, type: int; // id do curriculo do curso do aluno
			- key: perg_duv, type: string; // pergunta
			- key: resp_duv, type: string; // resposta
### Correcao:
	POST:
		Enviar uma nova Correção:
		url: localhost:3000/Reviews/addNewReview/
		Colocar no body utilizando o padrão form-data os seguintes parametros:
			- key :siape_admin, type: string; 
			- key: resp_correcao, type: string; // pergunta
			- key: horas_aceitas, type: int;
			- key: status, type: bool; // true = aceito, false = rejeitado
			- key: id_solicitacao, type: int // chave estrangeira que vem da solicitação
