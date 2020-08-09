# **Next Level Week #02 | Proffy**

Prática da Next Level Week #02 | [Rocketseat][Rocketseat]

![Banner topo][Banner topo]

  

## **Introdução**

___
  

### Projeto **Proffy**

Esse repositório contempla a prática proposta na **segunda edição da `<nwl/>` **, cujo projeto se chama **Proffy**.

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

### Links Úteis e Interessantes

##### Ambiente

[Configuração do ambiente](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)
[Instalação das dependências](https://www.notion.so/Instala-o-3d8bc65b8a0f48249bf3037156eb0a15)
[Atualização das dependências](https://www.notion.so/Atualiza-o-138506d91f2d422da44f5ccd4354186b)
[Erros mais comuns](https://www.notion.so/Tive-problemas-e-agora-7190da61cb234af88e5861d5d2897ad7)

##### Tecnologias e Ferramentas

[Figma][Figma]
[node][node]
[npm][npm]
[notion][notion]
[React][React]
[ReactDOM][ReactDOM]
[ReactJS][ReactJS]
[React Native][React Native]
  
  

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
[node]: <https://nodejs.org>
[npm]: <https://www.npmjs.com/>
[notion]: <https://www.notion.so/>
[React]: <https://github.com/facebook/react>
[ReactDOM]: <https://github.com/facebook/react/tree/master/packages/react-dom>
[ReactJS]: <https://pt-br.reactjs.org/>
[React Native]: <https://reactnative.dev/>
[TypeScript]: <https://www.typescriptlang.org/>
[Rocketseat]: <https://.rocketseat.com.br>
(Perfil de Marcelo Diament na Rocketseat)
