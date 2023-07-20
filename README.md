# wyden-aulas-express

wyden-aulas-express é um exemplo de uma API RESTful.

## Instalação

1. Clone este repositório: `git clone https://github.com/riangdasilva/wyden-aulas-express.git`
2. Instale as dependências: `npm install`

## Configuração

Antes de executar a API, é necessário configurar o banco de dados e as variáveis de ambiente:

1. Renomeie o arquivo `.env.example` para `.env` e preencha as variáveis com suas configurações.
2. Certifique-se de ter um servidor Postgres em execução ou atualize a variável `DB_URI` no arquivo `.env` com o endereço do seu banco de dados.

## Executando a API

Para iniciar o servidor localmente, execute o seguinte comando:

```bash
npm run start
```

A API estará disponível em: `http://localhost:3000`
