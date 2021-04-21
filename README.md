#nextlevelweek 05

Descricao do Projeto:
  - Chat com websockets

Comandos para iniciar o projeto
  - yarn init -y
  - yarn add express
  - yarn add @types/express -D
  - yarn add typescript -D
  - yarn tsc --init
    - change "script": true para false
  - yarn add ts-node-dev -D
    - adicionar linha no ficheiro "package.json"
      - "scripts":{ "dev": "ts-node-dev src/server.ts" }
  - yarn dev

  - yarn add typeorm reflect-metadata sqlite3 sqlite
  - yarn typeorm migration:create -n CreateSettings
  - yarn typeorm migration:run
  - change "tsconfig.json"
    - descomentar "experimentalDecorators": true
    - descomentar "emitDecoratorMetadata": true
  - yarn add uuid
  - yarn add @types/uuid -D


Configuracao de Ambiente:
  - https://www.notion.so/Trilha-Node-js-0b238db0256c4ce889df0e9ce92f4a68


Aula 01:
  - https://www.notion.so/Dia-1-Fundamentos-do-NodeJS-9a12b63d65ee480bbc71e173bcc20d2c
  - #missaoespacial

Aula 02:
  - https://www.notion.so/Dia-2-Iniciando-com-o-Banco-de-Dados-37250e7144b04d158f7a338e7637c986
  - #embuscadoproximonivel