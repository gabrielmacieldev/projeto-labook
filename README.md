# Projeto-Labook

O Labook é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.

Aplicação back-end de servidor express com banco de dados sqlite3.

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |

## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Recurso criado com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|

## Banco de dados

![projeto-labook ](https://user-images.githubusercontent.com/29845719/216036534-2b3dfb48-7782-411a-bffd-36245b78594e.png)

## Documentação
[Link Documentação](https://documenter.getpostman.com/view/24460918/2s93CPqXMs)


## Tecnologias utilizadas

1. [Node.js](https://nodejs.org/en/)
2. [Typescript](https://www.typescriptlang.org/)
3. [Express](https://expressjs.com/pt-br/)
4. [Cors](https://www.npmjs.com/package/cors)
5. [Knex](https://knexjs.org/)
6. [Arquitetura em camadas](https://imasters.com.br/arquitetura-da-informacao/arquitetura-em-camadas)
7. [Roteamento](https://expressjs.com/pt-br/api.html#router)
8. [Geração de UUID](https://www.npmjs.com/package/uuid)
9. [Geração de hashes](https://www.npmjs.com/package/bcrypt)
10. [Autenticação e autorização](https://www.npmjs.com/package/jsonwebtoken)
11. [Sqlite3](https://www.sqlitetutorial.net/)

## Autor

 [Linkedin](https://www.linkedin.com/in/gabrielmacieldev/)
