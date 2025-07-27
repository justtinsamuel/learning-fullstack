Step by Step to get started:
    npm init -y ===>>> create package.json
    code index.js .env .gitignore README.md ===>>> creat basic file
    mkdir controllers ===>>> create folder
    mkdir routes  ===>>> create folder
    npm i express pg sequelize ===>>> install express, pg, sequelize (depedencies)
    npm i nodemon sequelize-cli --save-dev ===>>> install nodemon & sequelize, during dev only (devDepedencies)

.env ===>> are environment variable, used to made secret stay secret. ex: password, API KEY, etc
    npm i dotenv

makesure all installed resource are stored in package.json
    nodemon need to be added manually

Create: Database menggunakan Sequelize:
init db menggunakan sequelize-cli init
    npx sequelize-cli init
add folder: config, migrations, models, seeders.

setting config.json
    "development": {
    "username": "postgres",
    "password": "admin",
    "database": "database_dev_exercise1",
    "host": "127.0.0.1",
    "dialect": "postgres"
    },

setting package.json
    "create-db": "sequelize-cli db:create",
    "migrate-db": "sequelize-cli db:migrate",
    "database": "npm run create-db && npm run migrate-db",


sesuaikan dengan database nya. pakai render free. Kalau berbayar repot contohnya.

buat database:
    npm run create-db

migrate db:
    npm run migrate-db

create new model untuk di migrate:
    npx sequelize-cli model:generate --name User --attributes email:string,password:string,username:string,image:string

    npx sequelize-cli model:generate --name Item --attributes name:string,category:string,price:integer,stock:integer,image:string




