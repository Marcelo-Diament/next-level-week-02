# **Next Level Week #02 | Proffy**

Prática da Next Level Week #02 | [Rocketseat][Rocketseat]

![Banner topo][Banner topo]

  

## **Introdução**

___
  

### Projeto **Proffy**

Esse repositório contempla a prática proposta na **segunda edição da `<nwl/>` (NextLevelWeek)**, cujo projeto se chama **Proffy**.

![Proffy](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3368c282-bf94-49bb-bc6b-905542231e2c%2FPattern.png?table=block&id=3d5f45f5-4ec5-4ef9-b210-3565b7cce4e1&width=3840&cache=v2)

> O nome **Proffy** é uma homenagem ao dia 06 de Agosto, Dia dos Professores.

O projeto chama-se **Proffy** e consiste numa plataforma de _e-learning_, onde se conecta alunos e professores numa plataforma de estudos _online_ com opções de criar perfil, cadastro de matérias, horários e valores de aula, buscar por registro de professores (com filtros por horário e matéria) e agendar aulas (não contempla vídeo chamadas). Os dados serão salvos (_storage_) do lado do cliente. Utilizamos o conceito _bubble first_ (_mobile first_), privilegiando os dispositivos _mobile_.

### Configuração do Ambiente

Antes de iniciarmos precisamos garantir que temos todas as ferramentas necessárias disponíveis em nosso ambiente local. A [Rocketseat][Rocketseat] preparou um [documento](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767) com o passo a passo para realizarmos essa configuração - seja para [instalar as dependências](https://www.notion.so/Instala-o-3d8bc65b8a0f48249bf3037156eb0a15), seja para [atualizá-las](https://www.notion.so/Atualiza-o-138506d91f2d422da44f5ccd4354186b), além de um documento com alguns dos [erros mais comuns](https://www.notion.so/Tive-problemas-e-agora-7190da61cb234af88e5861d5d2897ad7) que podem ocorrer durante essa configuração.

Antes de prosseguir, execute os seguintes comandos no terminal, para garantir que estamos com a mesma versão do _[node][node]_ e do _[npm][npm]_:

``` sh
node -v
// deve retornar v12.8.3

npm -v
// deve retornar 6.14.6
```

### Layout

Garanta que possui acesso aos arquivos de _layout_ do projeto no [Figma][Figma] para ter uma melhor visão do que será construído.

### Funcionalidades

##### Conexões

* Rota de listagem de conexões realizadas (operação de soma dos registros)

* Rota de criação de nova conexão (ativada quando clicarem em __Entrar em contato__)

##### Aulas

* Rota de listagem de aulas [filtros por matéria, dia da semana e hora]

* Rota de Criação de nova aula


### Tecnologias

Confira as principais tecnologias utilizadas no projeto:

##### React

[React][React] é uma **biblioteca de construção de interfaces SPA que via otimizar a experiência do usuário**. Também existem 'sub pacotes' do [React][React], de acordo com o ambiente da aplicação - veja alguns dos principais:

| ambiente | 'sub pacote' |
| ----- | ----- |
| Web | [ReactJS][ReactJS] |
| Mobile App | [React Native][React Native] |
| Realidade Virtual | ReactVR |
| Televisão | ReactTV |

Independentemente do 'sub pacote', sempre utilizaremos o **[React][React]**. O [React][React] também utiliza bibliotecas adicionais para integrar-se às interfaces de acordo com o ambiente. Por exemplo, na web utilizamos o [ReactJS][ReactJS] com o [ReactDOM][ReactDOM]. Já para _apps mobile_ utilizamos o [ReactNative][ReactNative] com uma biblioteca adicional também chamada de [ReactNative][ReactNative].

##### TypeScript

O [TypeScript][TypeScript] é uma extensão do JavaScript que utiliza a tipagem que facilita a manutenção do código e garante a consistência de nossas soluções, pois captura um erro antes mesmo de sua execução. Também possui recursos para IDEs que otimizam o desenvolvimento.

___
  

## Passo a Passo

  

### Aula 01 | ReactJS e Estrutura Web

##### 01.01 Criando projeto

Criaremos o projeto dentro da pasta do projeto/repositório. Caso utilize _yarn_ execute o comando `yarn create react-app web --template typescript` . Caso contrário, utilize o [npx][npx] com o comando `npx create react-app  web --template typescript` .

Após a criação do projeto (que chamamos de _web_), acesse a pasta com o comando `cd web` e então abra o [VSCode][VSCode] (ou sua IDE de preferência) com o comando `code .` . E, para visualizarmos o projeto rodando, rode `yarn start` (ou `npm start` ).

##### 01.02 Limpando o projeto

Podemos remover os seguintes arquivos:

 `./web/README.md`
 `./web/src/App.css`
 `./web/src/App.text.tsx`
 `./web/src/index.css`
 `./web/src/logo.svg`
 `./web/src/serviceWorker.ts`
 `./web/src/setupTests.ts`
  
Para que os erros que apareceram sejam corrigidos, precisamos:

* Remover a chamada dos arquivos `serviceWorker.ts` e `index.css` no arquivo `index.tsx`
* Remover o método `unregister()` do `serviceWorker.ts` do final do arquivo `index.tsx` (e os respectivos comentários)

* Remover a chamada dos arquivos `logo.svg` e `App.css` no arquivo `App.tsx`
* Substituir a _tag_ `<header></header>` (e todas as demais _tags_ contidas nela) por uma _tag_ `<h1></h1>` com o texto de preferência dentro dela

* Manter somente o arquivo `index.html` na pasta `./public` e remover todos os demais arquivos

* No arquivo `index.html` , deixar apenas as _tags_ _meta charset_, _meta viewport_, _meta theme-color_ e _title_ (atualizá-lo para _Proffy_, o nome da aplicação). Limpar também os comentários.

##### 01.03 Assets

Vamos incluir a pasta disponível como material extra da aula #01 (pasta `images` ) dentro de `src/assets` . Estamos importando para o projeto algumas imagens e ícones para utilizarmos ao longo do projeto. Estamos usando `.svg` para que as imagens fiquem mais leves.

##### 01.04 Global Style

Crie o arquivo `src/assets/styles/global.css` e aplique o inicial - incluindo as variáveis disponibilizadas nos arquivos extras da aula.

Crie o _link_ do `App.tsx` com o estilo global com `import './assets/styles/global.css';` .

Importe as fontes _Archivo_ (Pesos 400 - Regular -, e 700 - Bold) e _Poppins_ (pesso 400 - Regular) do [GoogleFonts](https://fonts.google.com/) com o seguinte trecho de código no `index.html` :

``` html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet">
```

##### 01.05 Landing Page

**index.tsx**

Crie o arquivo `src/pages/Landing/index.tsx` e inclua o trecho `import React from 'react';` para importar o React.

No arquivo `App.tsx` , altere o conteúdo da `div#root` para `<Landing></Landing>` (trazendo assim o componente Landing).

E então criaremos a função `Landing()` , seguida do trecho que à torna disponível para os outros arquivos: `export default Landing;` . E detalharemos a função `Landing()` , incluindo logo, título, imagem, dois botões com ícones e um span - sempre usando o atributo `className` para podermos estilizar esses trechos.

**styles.css**

Crie o arquivo `src/pages/Landing/styles.css` para que possamos aplicar estilo especificamente no componente Landing, aplique o estilo e então inclua o caminho relativo para o estilo no `index.tsx` : `import './styles.css';` .

##### 01.06 Listagem

Vamos repetir o processo de criarmos novos componentes - TeachersList e TeachersForm.

**Rotas**

O primeiro passo é instalarmos o **reactRouterDOM** - basta executar `yarn add react-router-dom` - ele nos ajudará a criarmos e manipularmos as rotas da aplicação.

Se instalado com sucesso, iremos criar o arquivo `routes.tsx` na pasta `./src` - ele é um componente que conterá todas as nossas rotas. Também precisaremos rodar `yarn add @types/react-router-dom -D` para que os componentes do `react-router-dom` possam ser importados.

Devemos ainda importar o componente Routes no `.App.tsx` e chamar o componente dentro da `div.App` .

E no arquivo `./src/Landing/index.tsx` importamos `Link` e alteramos as _tags_ `<a></a>` por `<Link></Link>` (trocando os atributos `href` por `to` ), para evitar _loadings_ desnecessários.

**Quebrando em Componentes**

Criamos o conteúdo inicial do componente `pages/TeacherList` . Mas, como podemos reaproveitar vários 'pedaços' dessa página em outras, tornaremos esses elementos repetitivos diferentes componentes, como, por exemplo, o `components/PageHeader` .

Basicamente salvaremos esses componentes reutilizáveis na página `/components` e trocaremos o trecho de HTML pela _tag_ do respectivo componente (definindo os devidos atributos). Lembre-se de verificar as importações (mover ou copiar os _imports_ necessários para cada componente e importar o componente novo nos arquivos de onde foi removido e onde mais venha a ser utilizado).

**Propriedades**

Agora precisamos alterar o título de cada instância do componente `PageHeader` . Para isso faremos os seguintes passos:

* Transformar a _function_ `PageHeader()` em uma _const_ (usando _arrow function_). Também definiremos que o `PageHeader` é um componente do tipo _Function Component_ (FC), que receberá a interface `PageHeaderProps` . E, como parâmetro único, receberemos _props_ (que contém todas as propriedades declaradas na interface). Ficará assim:

``` tsx
const PageHeader: React.FC<PageHeaderProps> = props => {
  // ...
}
```

* Definir uma _interface_ (chamada `PageHeaderProps` ) que conterá as _props_ do componente - nessa interface definiremos sua tipagem:

``` tsx
interface PageHeaderProps {
  title: string;
}
```

* Trocar o conteúdo do título pela _prop_ (usando interpolação):

``` tsx
<strong>{props.title}</strong>
```

* No componente que importa o `PageHeader` , trocaremos o conteúdo do título pela _prop_ _title_:

``` tsx
<PageHeader title="Que incrível que você quer dar aulas!"/>
```

  

### Aula 02 | Back End com Node.js

##### 02.01 Ambiente de Desenvolvimento

Conferir no início do documento - Configuração de Ambiente (Instalação ou Atualização).

##### 02.02 Criando Projeto e Configurando o Ambiente

Criar a pasta `server` , acessá-la pelo terminal e executar:

``` sh
yarn init -y
```

_Ou, se não estiver usando `yarn` , rode `npm init -y` ._

Será criado o arquivo `package.json` - que contém as principais informações sobre esse projeto e suas dependências.

Vamos criar o arquivo `./server/src/server.ts` , que será o principal arquivo da aplicação (será o primeiro a ser carregado, tudo partirá dele).

Usaremos [TypeScript][TypeScript] no projeto, por isso precisamos instá-lo com o comando `yarn add typescript -D` ou `npm install typescript -D` .

E precisamos criar o arquivo `tsconfig.json` , executando `yarn tsc --init` ou `npx tsc --init` . Esse arquivo determina a forma que o [TypeScript][TypeScript] gerará o arquivo JavaScript.

Por fim, instalaremos outra dependência ( `ts-node-dev` ), com os comandos `yarn add ts-node-dev -D` ou `npm install ts-node-dev -D` . Essa dependência será usada apenas em ambiente de desenvolvimento, ficará 'rodando' e observando o _script_ constantemente, refletindo atualizações e alterações do nosso código.

##### 02.03 Iniciando o Projeto

Precisamos incluir um _script_ de _start_ em nosso `package.json` , para podermos rodar `yarn start` ou `npm start` e iniciarmos nosso projeto.

Acrescentaremos uma sessão _scripts_ e, nela, o comando _start_. O trecho `--transpile-only` evita que erros sejam verificados, facilitando o desenvolvimento. Já o trecho `--ignore-watch node_modules` evita que aplicações de terceiros sejam convertidas. E `--respawn` evita que fique iniciando e finalizando. Ele só encerra após o 'Control C' no terminal.

Deve ficar assim:

``` json
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
  },
  "devDependencies": {
    "ts-node-dev": "^1.0.0-pre.56",
    "typescript": "^3.9.7"
  }
}

```

**express**

Instalamos o _express_ (um "micro framework" com algumas funcionalidades prontas):

``` sh
yarn add express
```

ou

``` sh
npm install express
```

No `server.ts` importamos o _express_ e definimos as configurações básicas do _express_ (_const app_, _listen_ e o método _get()_). No método `get()` simulamos o acesso a '/users' e retornamos um objeto como exemplo.

##### 02.04 Criando o Banco de Dados (SQLite)

Utilizaremos o _SQLite_ por conta de sua simplicidade, mas poderíamos utilizar outros sem problemas. Para instalarmos, precisamos executar: `yarn add knex sqlite3` ou `npm install knex sqlite3` . O _knex_ é um _query builder_, que possibilita escrevermos as _queries_ de forma mais simples, em JavaScript.

Depois da instalação, vamos criar a pasta `src/database` , onde ficarão os arquivos referentes ao BD (Banco de Dados). O primeiro arquivo a ser criado será o `connection.ts` . Nele importaremos o _knex_ e o _path_ (para facilitar o uso dos recursos das rotas). Então definiremos a _const_ db, que - usando _knex_ - definirá o tipo de banco (_sqlite3_), a connexão e, no caso do _sqlite3_, definiremos a propriedade `useNullAsDefault` como `true` .

**Migration**

O Knex é escrito em `.js` e não `.ts` , por isso precisaremos criar o arquivo `./server/knexfile.ts` . Nele faremos o seguinte:

``` ts
import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};
```

A _migration_ serve para facilitar o trabalho em equipe ao garantir uma mesma estrutura de Banco de Dados, replicando todo o 'passo a passo'/histórico das _schemas_ com simples comandos.

Para criar as _migrations_, vamos salvar os arquivos dentro de `./server/src/database/migrations` . As _migrations_ devem estar ordenadas de modo que a ordem de criação/manipulação dos dados e tabelas seja respeitado. Por isso ordenaremos com um prefixo com 2 dígitos e o nome descritivo da _migration_, como `00_create_users.ts` .

Como o _knex_ não lê JavaScript, customizaremos os comandos de terminal para rodar as últimas _migrations_ e para realizar o _rollback_ das mesmas (no arquivo `./server/package.json` ):

``` sh
"knex:migrate": "knex knexfile --knexfile.ts migrate:latest",
"knex:migrate:rollback": "knex knexfile --knexfile.ts migrate:rollback"
```

Para rodar os comandos basta acrescentar `yarn` ou `npm` antes ( `yarn knex:migrate` ).

Como vamos trabalhar com o _sqlite3_, é recomenrável usar a extensão _SQLite_ do VSCode. Selecione _Open database_ para visualizar a tabela _users_ criada e as 2 tabelas da _migration_ criada.

Agora vamos criar as demais _migrations_ (_class_schedule_, _classes_ e _connections_).

##### 02.05 Routes

Vamos criar o arquivo `./server/src/routes.ts` . E vamos mover o trecho em que definimos a rota `app.get()` no arquivo `server.ts` .
___
  

## **Informações Complementares**

### Conceitos

##### ReactJS | Criando Componentes

Componentes são basicamente funções que retornam trechos de HTML. No [React][React] criamos componentes para reaproveitarmos código, de forma a tornar o uso de elementos que se repetem ao longo dos documentos mais fácil (ao invés de reescrevermos o elemento a cada repetição, usamos o componente).

Sempre que criamos componentes precisamos:

* Iniciar o nome do componente com letra maiúscula, para não ser interpretado como uma _tag_ HTML

* Sempre que formos incluir o HTML dento do código JavaScript (.jsx, .tsx) precisamos importar o [React][React], com o seguinte trecho:

``` sh
import React from 'react';
```

* Usar a extensão .tsx, pois estamos usando [TypeScript][TypeScript]

* Criamos uma pasta com o nome do componente (de acordo com a organização do projeto e tipo de componente - _page_, _component_, etc.) e criamos o arquivo `index.tsx` e seu estilo - `styles.css` . Depois simplesmente importamos e utilizamos a respectiva _tag_ do componente importado.

##### ReactJS | Props

Propriedades são uma forma de transmitirmos informações entre os componentes. Funcionam como as propriedades de um objeto JavaScript. Podemos defini-las numa interface (já definindo sua tipagem) e definirmos o componente como FC (FunctionComponent), de modo que receba as _props_ definidas na interface e permita usarmos as propriedades desejadas dentro do HTML do componente.

Outra maneira de usarmos uma _prop_ (sem termos de definir na interface) é através da propriedade _children_ ( `props.children` ). Essa propriedade nos permite definir o conteúdo dentro do contexto onde o componente está sendo utilizado (como o form de `TeacherList` dentro do `PageHeader` ).

##### ReactJS | Rotas

Para trabalharmos com as rotas (endereços da aplicação), instalamos o `react-router-dom` ( `yarn add react-router-dom` ) e importamos o `BrowserRouter` e o `Route` no arquivo `routes.tsx` (que também é um componente):

``` tsx
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ComponenteDesejado from './local/ComponenteDesejado';

function Routes() {
  return (
    <BrowserRouter>
      <Route
        path="/" // Caminho da rota
        exact={true} // Se a correspondência deve ser exata
        component={HomeBanner} // Componente a ser exibido
      />
      <Route path="/caminho" component={ComponenteDesejado} />
    </BrowserRouter>
  );
}

export default Routes;
```

E no arquivo `./src/ComponenteDesejado/index.tsx` importamos também o `Link` - `import { Link } from 'react-router-dom` - e alteramos as _tags_ `<a></a>` por `<Link></Link>` (trocando os atributos `href` por `to` ), para evitar _loadings_ desnecessários. O `Link` nos permite aplicar o conceito de **SPA** (Single Page Application), pois depois de carregado o conteúdo da página, não será carregado novamente.

Também precisaremos rodar `yarn add @types/react-router-dom -D` para que os componentes do `react-router-dom` possam ser importados.

##### Node.js

É uma plataforma que nos permite utilizar o mesmo JavaScript (puro ou com ReactJS, ...) no back-end.

* _Non-blocking IO_: conseguimos controlar a assincronicidade

* Streams (nos permite consumir dados no estilo '_LazyLoad_') e WorkerThreads (nos permite trabalhar o _core_)

##### Node.js | Express, Rotas e Recursos

**express**

Iremos instalar algumas dependências como o _express_ (um "micro framework" que traz algumas funcionalidades prontas). Para instalarmos, usamos:

``` sh
yarn add express
```

ou

``` sh
npm install express
```

Após a instalação devemos importá-lo no nosso `server.ts` ( `import express from 'express';` ). Pode ser necessário executar `yarn add @types/express -D` também (caso o pacote não venha com [TypeScript][TypeScript] definido, aí baixamos esses pacotes com a tipagem).

**Rotas**

No arquivo `server.ts` , declaramos `const app = express();` , definimos os métodos do `app` e depois definimos a porta que o `listen()` usará (como 3333), com `app.listen(3333);` . 

O arquivo deverá ficar assim, por enquanto. O método `get()` retorna a _const_ _users_ nesse exemplo:

``` ts
import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Fulano', age: 25 },
    { name: 'Ciclano', age: 52 },
  ];
  return response.json(users);
});

app.listen(3333);
```

**Recursos**

São os trechos enviados após o endereço 'base' (como `/users` no exemplo anterior).

**Métodos**

São os métodos usados nas requisições HTTP, como **get**, **post**, **put** e **delete**, usados para listar, incluir, atualizar ou deletar dados. Usaremos o [Insomnia][Insomnia] para visualizarmos, consultarmos e manipularmos esses dados. Se preferir, pode utilizar o [Postman][Postman] também.

Na ferramenta, basta criarmos uma _request_, selecionarmos o endereço (_endpoint_), o método (GET, POST, PUT, DELETE...) e, se necessário, passarmos os parâmetros. No caso, temos como endereço `http://localhost:3333/users` e como método, _post_.

> Para o express ler JSON, precisamos rodar `app.use(express.json());` após criarmos a _const_ _app_.

**Parâmetros**

Há 3 tipos de parâmetros que podemos utilizar. São:

* Request Body: normalmente são os dados para criação ou atualização de um registro. Acessamos através de `request.body` .

* Route Param: recursos da nossa rota (como `/users/12` , onde 12 seria o ID do usuário). Na rota é representado por `/users:id` . Acessamos através de `request.params` .

* Query Param: parâmetros mais utilizados para paginação, filtros e ordenação. São exibidos na URL a partir do `?` após o recurso e concatenados com `&` . Cada _query param_ possui uma chave e um valor (exemplo: `/users?offset=0&orderby=ASC&limit=25` ). Acessamos através de `request.query` .

##### Knex

> O Knex é um _query builder_, que possibilita escrevermos as _queries_ de forma mais simples, em JavaScript.

### Links Úteis e Interessantes

##### Ambiente

[Configuração do ambiente](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)
[Instalação das dependências](https://www.notion.so/Instala-o-3d8bc65b8a0f48249bf3037156eb0a15)
[Atualização das dependências](https://www.notion.so/Atualiza-o-138506d91f2d422da44f5ccd4354186b)
[Erros mais comuns](https://www.notion.so/Tive-problemas-e-agora-7190da61cb234af88e5861d5d2897ad7)

##### Tecnologias e Ferramentas

[Figma][Figma] | [Insomnia] | [node][node] | [npm][npm] | [notion][notion] | [Postman] | [React][React] | [ReactDOM][ReactDOM] | [ReactJS][ReactJS] | [React Native][React Native]
  
  

###### 

![Rocketseat](https://rocketseat.com.br/icons/icon-48x48.png?v=cfca599cb367ccaf7377d56ddc7542f5)

**Rocketseat**

[YouTube](https://www.youtube.com/rocketseat) | [Twitter](https://twitter.com/rocketseat) | [Facebook](https://web.facebook.com/rocketseat) | [Instagram](https://www.instagram.com/rocketseat_oficial/)
___

# Obrigado pela visita!

**Vamos nos conectar?**
Se quiser trocar idéias, experiências e figurinhas, entre em contato comigo!

**Marcelo Diament** | Desenvolvedor Front End Pleno e Instrutor
[Rocketseat](https://app.rocketseat.com.br/me/marcelo-diament) | [Github][Github] | [LinkedIn][LinkedIn]

[//]: # 

[Github]: <https://github.com/Marcelo-Diament>
[LinkedIn]: <https://linkedin.com/in/marcelodiament>
[Banner topo]: <https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa1b2081b-d1ad-4934-b13d-987d2c94eb52%2F1_-_NLW_02_-_2560x1080.jpg?table=block&id=98a471ad-3cb6-4482-84b8-ceed31c45767&width=3840&cache=v2>
(<nlw/> #02 | Proffy)
[Figma]: <https://figma.com>
[Insomnia]: <https://insomnia.rest/download/#windows>
[node]: <https://nodejs.org>
[npm]: <https://www.npmjs.com/>
[notion]: <https://www.notion.so/>
[Postman]: <https://www.postman.com/>
[React]: <https://github.com/facebook/react>
[ReactDOM]: <https://github.com/facebook/react/tree/master/packages/react-dom>
[ReactJS]: <https://pt-br.reactjs.org/>
[React Native]: <https://reactnative.dev/>
[TypeScript]: <https://www.typescriptlang.org/>
[Rocketseat]: <https://.rocketseat.com.br>
(Perfil de Marcelo Diament na Rocketseat)
