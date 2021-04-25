<h2 align="center"><img width="150px" style="border-radius: 50%;" src="https://github.com/susanaestevao/chatty/blob/main/public/images/chat-bot.jpg?raw=true" /></h2>

<h2 align="center">Real time support chat with websockets</h2>

<p align="center" style="color: lightblue">“What we know is a drop. <br>What we ignore is an ocean.”</p>

</br>

## 💻 Project

The support-chat is an app that offers a real-time support chat (like those E-commerce chats)

This project was developed during the Node.js path in the fifth edition of NLW (Next Level Week). We learned concepts about what is an API, starting a project using Typescript and Express for route management.

</br>

## ✨ Technologies

  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [TypeORM](https://typeorm.io/#/)
  - [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)
  - [Insomnia](https://insomnia.rest/)
  - [Socket.io](https://socket.io/)
  - [Mustache](https://mustache.github.io/)


</br>

## 🚀 How to run

- Clone this repo
- Install all dependencies with `yarn`
- Start the server with `yarn dev`

You can access the app typing [`localhost:3333`](http://localhost:3333) on your favorite browser.

</br>

## ⌨️ Commands to start/during the project

```bash
  $ yarn init -y
  $ yarn add express
  $ yarn add @types/express -D
  $ yarn add typescript -D
  $ yarn tsc --init
  $ yarn add ts-node-dev -D
  $ yarn dev
```

```bash
# add line in file `package.json`
"scripts": { "dev": "ts-node-dev src/server.ts" }
```

```bash
# change on file `tsconfig.json`
"script": false
```

```bash
  $ yarn add typeorm reflect-metadata sqlite3 sqlite
  $ yarn typeorm migration:create -n CreateSettings
  $ yarn typeorm migration:run
  $ yarn add uuid
  $ yarn add @types/uuid -D
```

```bash
#change `tsconfig.json` uncomment
"experimentalDecorators": true
"emitDecoratorMetadata": true
```

```bash
  $ yarn typeorm migration:create -n CreateUsers
  $ yarn typeorm migration:run
  $ yarn typeorm migration:create -n CreateMessages
  $ yarn typeorm migration:run
```
```bash
  $ yarn add socket.io
  $ yarn add @types/socket.io -D
  $ yarn add ejs
  $ yarn add socket.io-client
  $ yarn typeorm migration:create -n CreateConnections
  $ yarn typeorm migration:run
```
```bash
  $ yarn add mustache
```

</br>

## 📚 Environment Configuration:
  - [Trilha NodeJS - Notion](https://www.notion.so/Trilha-Node-js-0b238db0256c4ce889df0e9ce92f4a68)

</br>

## 📄 Classes on Notion
- [Notion - Class 01](https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-9a12b63d65ee480bbc71e173bcc20d2c)
#missaoespacial

- [Notion - Class 02](https://www.notion.so/Dia-2-Iniciando-com-o-Banco-de-Dados-37250e7144b04d158f7a338e7637c986)
#embuscadoproximonivel

- [Notion - Class 03](https://www.notion.so/danileao/Dia-3-Continuando-a-nossa-aplica-o-2d59e5f2d5d94081b205cc9db55637b2)
#astronautas

- [Notion - Class 04](https://www.notion.so/danileao/Dia-4-Trabalhando-com-Websocket-236b68d36a2c4416930aff0bd0f42594)
#universoinfinito

- [Notion - Class 05](https://www.notion.so/danileao/Dia-5-Finalizando-o-projeto-11f69d2452644dea9c6e4a9d2af07537)
#missaocumprida
