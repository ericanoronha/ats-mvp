# ATS MVP

Inicialmente eu pensei numa estrutura para um CRUD de candidatos, porém acabei optando por desenvolver um **CRUD de vagas**, que também é uma das funcionalidades de um *Applicant Tracking System*.

## Back-end com JSON Server

Usarei JSON server para construir a **API Rest** onde serão guardadas as informações de vagas. 

`npm init -y` para criar o package.json

`npm i json-server` para iniciar o JSON server

Para isso, criei um arquivo `db.json` para armazenar os endpoints da API. Criei três jobs mockados para testar a API no Postman. Para isso, criei um script de `start` no `package.json` para que o JSON server suba na porta :3001, já que o Angular sobe servidor na porta :4200.

![Tela do Postman](tela-postman.png)

Testados os métodos GET e PUT no Postman, segui com o desenvolvimento. 

## Front-end com Angular 12

Criação do projeto: `ng new ats --skip-install`.

Ajustes no `package.json` conforme documentação do **PO UI**.

Instalação de dependências: `npm install`.

Adição do pacote `@po-ui/ng-components`: `ng add @po-ui/ng-components`

Execução da aplicação em servidor local: `ng serve`

Desabilitei o modo estrito em `tsconfig.json` pois isso me gerou alguns erros de compilação em outros projetos anteriores.

### Árvore de Componentes

![Árvore de componentes](arvore-componentes.png)

### Importação de biblioteca UI

Minha ideia era utilizar o PO UI neste projeto para começar a me familiarizar, até já havia feita a sua instalação no projeto, porém devido a curva de aprendizado acabei optando por utilizar o Material para elaborar o layout. 🙁

Executei o comando `ng add @angular/material` no terminal para efetuar a instalação do Material. Tomei a liberdade de escolher o tema Indigo/Pink e também optei pela tipografia global e pela configuração de animações do Material.

### Componente header

`ng g c components/template/header`

Criei um arquivo `index.ts` em cada diretório usando a ideia do método Barrel, para otimizar as exportações dos componentes.

Em seguida, importei o módulo MatToolbarModule no módulo principal da aplicação.

















------



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
