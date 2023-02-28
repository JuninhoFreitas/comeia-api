<p align="center">
  <a href="" rel="noopener">
 <img width=auto height=auto src="https://i.imgur.com/3KU5qXn.png" alt="Project logo"></a>
</p>

<h3 align="center">API - Task list</h3>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

</div>

---

<p align="center"> Objetivo do projeto: 
  Desenvolver uma API de "Lista de Tarefas" em NodeJS.
    <br> 
</p>

## 📝 Indice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Como usar](#usage)
- [Built Using](#built_using)
- [Autor](#autor)

## 🧐 Sobre <a name = "about"></a>
<p>
  A API deve permitir ao usuário cadastrar, editar, excluir e listar tarefas.
</p>


## 🏁 Primeiros passos <a name = "getting_started"></a>

### Pre-requisitos
- Docker ou MySQL Instalado.
- Node 16.x
- Criação de arquivo .env contendo as váriaveis de ambiente que são necessárias neste projeto
(Use o arquivo .env.example como base)
___
### Detalhes do .ENV
<i>.env</i>

| Variável          | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| DATABASE_HOSTNAME | Hostname para conexão com o banco de dados             |
| DATABASE_USERNAME | Usuario de acesso ao banco de dados                    |
| DATABASE_PASSWORD | Senha de acesso ao banco de dados                      |
| DATABASE_DATABASE | Nome do banco de dados                                 |
| DATABASE_PORT     | Porta para conexão ao banco de dados                   |
| JWT_SECRET        | A chave usada para criptografar as senhas              |
| NODE_ENV          | O environment da aplicação                             |

___
### Instalação e Execução

Iniciar instalação de pacotes necessários com npm:
```
npm ci
```
Iniciar banco de dados em container no docker
```
docker-compose up -d --build
```
Criação das tabelas e relações do banco de dados
```
npm run typeorm migration:run
```
Executar serviço API:
```
npm run dev
```
Se tudo ocorreu bem, após ter criado o .env e configurado corretamente o banco de dados, ao executar o comando acima, deverá obter a seguinte mensagem no terminal:
```
Server started on port 3333! 🏆 GET http://localhost:3333
```
Indicando que o servidor está rodando em localhost na porta 3333
___
<br>
## 🎈 Como usar <a name="usage"></a>

### Postman & Swagger
O diretório `docs/` contém a collection+environment para o Postman
e a documentação do projeto no Swagger.
Para acesso as rotas de Task, o usuário deve estar autenticado.




___
<br>

## ⛏️ Built Using <a name = "built_using"></a>

- [MySQL](https://www.mysql.com/) - Database
- [Express](https://expressjs.com/) - HTTP Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Celebrate](https://www.npmjs.com/package/celebrate) - Middleware validator
- [TypeORM](https://typeorm.io/) - ORM Framework

## ✍️ Autor <a name = "autor"></a>

- [@JuninhoFreitas](https://github.com/JuninhoFreitas) - Desenvolvimento e documentação
