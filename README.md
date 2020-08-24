# Exercícico NodeJS

O servidor express e Postgres são executados por containers Docker.

## Iniciando o projeto

- Rode `docker-compose up`

_Nota: caso precise instalar algum pacote, não esqueça de rodar `npm install` dentro do shell da aplicação, após executar `docker-compose run --rm app sh`_

## Criando o banco de dados

- Use `adminer` (http://localhost:8080) para criar um banco de dados chamado `task-list`

## Rode as migrações

- Para entrar no shell do container de aplicativo: `docker-compose run --rm app sh`
- Rodando as migrações de banco de dados: `npx sequelize-cli db:migrate`
- Criando registros com seeds: `npx sequelize-cli db:seed:all`
