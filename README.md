# BYTE-CINE 🎬

Seja bem-vindo à sua plataforma de cinema. Aqui você pode ver o filme que desejar, a hora que desejar. 😎

## Técnologias Necessárias 🧑‍💻

Para poder rodar este projeto em sua máquina, você precisará dos seguintes recursos:

    1. VSCODE (IDE) https://code.visualstudio.com/download
    2. NODEJS 11+ https://nodejs.org/en/download
    3. NPM https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    4. MONGODB (C.E.) https://www.mongodb.com/docs/manual/administration/install-community/
    5. EXPRESS https://www.npmjs.com/package/express
    6. MONGOOSE https://www.npmjs.com/package/mongoose
    7. DOTENV https://www.npmjs.com/package/dotenv
    8. DOCKER https://www.docker.com/products/docker-desktop/
    9. INSOMNIA, POSTMAN ou OUTROS: https://www.postman.com/downloads/

## Montando Ambiente 🚧

Você precisará abrir sua IDE de preferência (neste exemplo foi utilizado vscode como IDE). Uma vez aberta, abra a pasta que contém o projeto. Feito isso, se você tiver instalado todas as técnologias necessárias, precisará rodar o comando no terminal (lembrando de estar no caminho correto para funcionar, que é a pasta do projeto).

Rode o comando:

    npm start

Com isso, deverá aparecer a seguinte mensagem no seu terminal para garantirmos que a aplicação está rodando com sucesso:

    > byte-cine@1.0.0 start
    > node src/app.js

    Server is running on port {DEFINIDA NO ARQUIVO .env}
    Connected to database

## Testando funcionalidades 🛠️

Uma vez com a aplicação rodando, possuímos as seguintes ações dentro da nossa base de filmes:

    1. Criar um filme
    2. Listar todos os filmes
    3. Listar um filme pelo ID
    4. Alterar um filme
    5. Remover um filme
    6. Comprar ticket

Para inserirmos filmes dentro da nossa base de dados, precisaremos de um exemplo. O exemplo abaixo mostra um arquivo JSON base, com algumas informações de um filme exemplo a ser inserido dentro da base, basta apenas copiar o JSON informado e colocar dentro do POST na aplicação que você selecionou para testar a API (insomnia, postman, thunder, etc.).

    JSON base:
    {
        "title": "Kung Fu Panda 4",
        "description": "In the latest installment of the beloved Kung Fu Panda series, Po continues his adventure as he mentors a new generation of warriors and faces unprecedented challenges.",
        "image_url": "https://example.com/kungfupanda4.jpg",
        "actors": ["Jack Black", "Angelina Jolie", "Dustin Hoffman"],
        "genre": "Animation",
        "session": {
            "shift": "Morning",
            "capacity": 40,
            "time": "2024-04-20T09:00:00Z",
            "room": "Room 5",
            "tickets": [
                    {
                        "isAvailable": true,
                        "seat": "A1",
                        "price": 12.00
                    },
                    {
                        "isAvailable": true,
                        "seat": "A2",
                        "price": 12.00
                    } ] //Adicione mais tickets conforme desejar.
        }
    }

Com o exemplo acima, você pode alterar os campos e inserir quantos filmes desejar. Também pode realizar o restante das funcionalidades, como alterar, remover, listar e comprar tickets para o filme criado.

## Docker 🐳

Depois de ter instalado o docker no seu computador, no seu terminal digite o comando:


    docker-compose up -d


## Parâmetros do .env 🚀

O valor das variáveis a seguir serve para você indicar onde se encontra o seu banco e qual porta você deseja subir a sua aplicação.

    mongodb://admin:admin@localhost:27017
    PORT: 3000

## Regras de Negócio 📝

Temos aqui abaixo, algumas regras que você deve respeitar durante a utilização desta API. Em caso de dúvidas, erros ou más funcionalidades, contate os administradores do produto.

    1. Na criação do filme, os dados de "title" e "shift" da "session" são *obrigatórios*
    2. A capacidade máxima de assentos para cada filme não pode ultrapassar 40
    3. Os shifts(turnos) validos para as sessões dos filmes são apenas -> 'Morning', 'Afternoon', 'Evening'

## Authors

- [@digão](https://github.com/rodrigo-marquesz)
- [@mezz](https://github.com/vitormezz)
- [@lusca](https://github.com/luskinhasousa)
- [@leo](https://github.com/leonardofsil)
