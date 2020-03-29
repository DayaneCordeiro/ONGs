#Trabalhando no front end
* Limpando a estrutura, o react baixa inúmeros arquivos que não serão utilizados e iremos apagá-los para deixar a aplicação mais leve.
	* READ ME.md
	* src/App.css
	* src/App.Test.js
	* src/index.css
	* src/logo.svg
	* src/serviceWorker.js
	* src/setupTests.js
	* public/robots.txt
	* public/manifest.json
	* public/logo192.png
	* public/logo512.png

###Componente
* Uma função no reac que retorna html.
* Quando cria um arquivo componente, precisa ter o nome com a primeira letra em maíusculo para funcionar.

###Estado
* Não é possível alterar o valor do estado de forma direta.

###Imutabilidade
* Um estado não pode ser alterado diretamente, retorna um array com duas posições, onde a primeira é o valor em si e a segunda uma função que permite mudar esse valor.

###Instalando o pacote de ícones no reac
* npm install react-icons

###Instalando o pacote de rotas
* npm install react-router-dom: pacote responsável por lidar com as rotas na aplicação. **Importações para o arquivo routes.js:**
	* Browserouter: precisa ficar em volta de todas as rotas para que funcione.
	* Route: cada uma das rotas.
	* Switch: garante que apenas uma rota será executada por vez.

###Estilização
* No css usamos uma linha "input + input": isso quer dizer que ele vai pegar um input que tenha outro antes, ou seja, não pega o primeiro input da página.
* CSS = grid-template-columns: informa a quantidade de colunas que a lista terá.

###Instalando o cliente http: vai fazer as chamas à API e receber as respostas.
* npm install axios
* Tratamento no arquivo api.js

###Para que a página não fique recarregando toda vez que clicar no submit do formulário
* e.preventDefault();
*useEffect dispara uma função em determinado momento desejado.