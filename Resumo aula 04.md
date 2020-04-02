# Desenvolvendo a interface mobile
* Instalando o expo na máquina:
	* npm install -g expo-cli <--- na pasta aulas, -g siginifa que a instalação é global na máquina
	* tive problemas na instalação do expo, me ajudaram no grupo "roda Set-ExecutionPolicy Unrestricted e seleciona All"
	* expo init mobile <-- criando o projeto react native

* Rodando no celualar:
	* yarn start <-- não funciona, consegui rodar com o npm ele abre uma página e aguardando um pouco ele gera um qrcode
	* abrindo a câmera normal do celular ele abre o projeto com o expo
	* Para abrir o menu no celular, "chaqualha" ele até aparecer

* Estrutura HTML não existe semâm-ntica no react native e para estilização usa-se apenas a style, não usa class ou id usa-se style={styles.nomeDoElemento}:
	* Não tem todas as tags, usaremos muito as divs, ou as views, que servem para containers
	* <text> qualquer estrutura de texto
	* Todos os elementos tem display flex por padrão
	* Os nomes dos elementos de estilo são cammel case exemplo, background-color no react native é backgroundColor
	* Na estilização os valores que não são números precisam ter aspas simples
	* Não existe herança de estilos

* Para o esquema das rotas:
	* instala o react navigation: npm install @react-navigation/native
	* Em seguida instala: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-communit/masked-view <--- Não funcionou, instalei com npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
	* Em seguida: npm install @reac-navigaton/stack <-- também tive problemas, rodei o comando npm config set unsafe-perm=true e depois consegui intalar

* Para conseguir mandar e-mails:
	* expo install expo-mail-composer

* Para formatação em moeda:
	* npm install intl
	* Na API:
		* import 'intl';
		* import 'intl/locale-data/jsonp/pt-BR';