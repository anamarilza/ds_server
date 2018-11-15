# ds_server
# Servidor do trabalho de DS

## Instruções de uso:
Requisitos: mysql, nodejs e npm instalados;

### LEMBREM DE VERIFICAR A PASSWORD

mysql deve estar com o database criado conforme o arquivo dbconnection.js

### Para carregar o mysql com o banco de dados usar o comando:
	mysql < dump.sql


Entrar no diretório e lançar o comando: 
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
