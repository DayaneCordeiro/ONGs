#Conteúdo da aula 02

* Na rota, tudo que vem após a barra é chamado de recurso. Exemplo '/user' <- está tentando acessar o recurso de user. Normalmente um recurso é associado à uma tabela do banco.
* Métodos HTTP:
	* **GET:** buscar uma informação do back-end.
	* **POST:** criar uma informação no back-end.
	* **PUT:** alterar informação no back-end.
	* **DELETE:** deletar informações no back-end.
* Tipos de parâmetros:
	* **Query params:** Parâmetros enviados na rota após "?" exemplo: users?nome=dayane&idade=24 (utilizados para filtros, paginação, etc)
	* **Route params:** Parâmetros utilizados para identificar recursos. Exemplo users/:id -- no navegador iria o id numérico do usuário em questão.
	* **Request body:** Corpo da requisição utilizado para criar e alterar recursos.

* Instalamos o nodemon para startar o servidor usando o comando node start, além disso o servidor lê as alterações sem precisar ficar reiniciando.
* O banco de dados utilizado será o SQLite <- para instalar, no terminal dentro da pasta backend:
	* npm install knex
	* npm install sqlite3
	* npx knex init
	* muda o filename do arquivo knexfile.js para a src

###Entidades do projeto
* ONG
* Caso (incident)

###Funcionalidades
* Login de ONG
* Logout de ONG
* Cadastro de ONG
* Cadastrar novos casos
* Deletar casos
* Listar casos específicos de uma ONG
* Listar todos os casos
* Entrar em contato com a ONG

###Criando o banco
* Dentro da pasta database cria uma pasta chamada "migrations"
* Dentro do arquivo knexfile.js cria o caminho para as migrations:
	migrations: {
		directory: './src/database/migrations'
    	}
* No terminal, dentro da pasta backend:
	* npx knex migrate:make create_ongs
	* Deu erro no comando acima tive que acrescentar o seguinte comando informado no discord:
		* npm install sqlite3 --save
* Para criar a tabela: npx knex migrate:latest
* Cria o migrate para incidents:
	* npx knex migrate:make create_incidents
	* npx knex migrate:latest

#Após a criação total do banco inatalamos o cors que é o que define quem pode acessar a API:
	* npm install cors