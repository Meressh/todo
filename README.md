# Todo

> Todo List

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

Sequelize -> ORM, migrations, seeders

DOMpurify -> Protection for XSS attacks

Escape-html -> escape HTML, CSS...

Testing -> mocha-shx

Validation -> Sequelize

Emails -> nodemailer

## Getting Started

Getting up and running is easy.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

```
cd path/to/todo
npm install
```

3. Connect database
   In ./config/config.json and default.json edit your mysql credential
4. Migrate migrations

   ```
   sequelize db:migrate
   ```
5. Edit smtp credentials
   Optional

   in ./src/hooks/send-email.ts
6. Run tests

   ```
   npm test
   ```
7. Seed database

   ```
   sequelize db:seed:all
   ```
8. Run app

```
npm run start
or 
npm run dev
```

npm run start -> ./lib

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## The main branch is dev branch!

Probably could not be stable!

## Migrations models

sequelize model:generate --name users --attributes email:string,password:string

sequelize model:generate --name listUsers --attributes userId:integer,todoId:integer

sequelize model:generate --name todos --attributes title:string

sequelize model:generate --name items --attributes title:string,text:text,deadline:string,userId:integer,type:string,todoId:integer

sequelize db:migrate

sequelize db:migrate:undo

sequelize db:migrate:undo:all

## Table seeders

sequelize seed:generate --name users

sequelize seed:generate --name listUsers

sequelize seed:generate --name todos

sequelize seed:generate --name items

sequelize db:seed:all

sequelize db:seed:undo

sequelize db:seed:undo:all

## Associations

./src/services/models/* at the end of file

## Validations & Constraints

#### Constraints

-> SQL level validation => ./src/models/*

#### Validation

-> javascript level validation => ./src/models/*

## Rest Api

Every create, update, patch has xssProtection hook.

### Endpoint - Users

#### Create

POST -> localhost:3030/users => Register user.

body -> raw(json)

Authorization -> none

body:

```
{

    "email":"marek@marek.com",
    "password":"marek"

}
```

#### Get

GET -> localhost:3030/users => Get users.

body -> none

Authorization -> Bearer <your_token>

#### Find

GET -> localhost:3030/users/:id => Get current register user.

body -> none

Authorization -> Bearer <your_token>

#### Update

UPDATE -> localhost:3030/users/:id => Updates current user (replace whole model with request data) (You can only delete myself).

body -> raw(json)non

Authorization -> Bearer <your_token>

#### Patch

PATCH -> localhost:3030/users => Updates current user (only part of data for example only email) (You can only delete myself).

body -> raw(json)non

Authorization -> Bearer <your_token>

#### Remove

DELETE -> localhost:3030/users/:id => Remove current user (You can only delete myself).

body -> none

Authorization -> Bearer <your_token>

#### Authentication

GET -> localhost:3030/authentication => Get token of registered user.

body -> raw(json)-> none

Authorization -> none

body:

```
{
    "strategy": "local",
    "email": "marek@marek.com",
    "password": "marek"
}
```

### Endpoint - Todo

#### Create

POST -> localhost:3030/todos => Create todo.

body -> raw(json)

Authorization -> Bearer <your_token>

body:

```
{

    "title":"This is example title"

}
```

#### Get

GET -> localhost:3030/todos => Get todos. -> When Token provided also users data are included.

body -> none

Authorization -> Bearer <your_token> || none

#### Find

GET -> localhost:3030/todos/:id => Get todo. -> When Token provided also users data are includedGet current register use.

body -> none

Authorization -> Bearer <your_token> || none

#### Update

Disallowed()

=> authenticate("jwt"), xssProtection(), -> For now the update  is disallowed -> Maybe add hook to check if user is admin or so.

#### Patch

Disallowed()

=> authenticate("jwt"), xssProtection(), -> For now the patch  is disallowed -> Maybe add hook to check if user is admin or so.

#### Remove

Disallowed()

=> authenticate("jwt"), xssProtection(), -> For now the remove  is disallowed -> Maybe add hook to check if user is admin or so.

### Endpoint - list-user junction table

#### Create

POST -> localhost:3030/listUsers => Create todo. Also send email to user via provided ID.

-> You can insert more than one value!

body -> raw(json)

Authorization -> Bearer <your_token>

body:

```
{
    "userId": 4,
    "todoId": 6
}
```

#### Get

Disallowed()

#### Find

Disallowed()

#### Update

Disallowed()

#### Patch

Disallowed()

#### Remove

Disallowed()

-> Remove is not allowed because we will remove data in other hooks -> users or todos

### Endpoint - Items

#### Create

POST -> localhost:3030/items => Create item.

body -> raw(json)

Authorization -> Bearer `<your_token>`

body:

```
{
    "title": "<div><script>console.log('cross')</script>Title Items</div>",
    "text": "<div><script>console.log('cross')</script>Text Items</div>",
    "deadline": "2022-09-3 12:40:32",
    "userId": 4,
    "todoId": 2,
    "type": "active"
}
```

#### Get

GET -> localhost:3030/items => Find items.

body -> none

Authorization -> Bearer `<your_token>`

#### Find

GET -> localhost:3030/items/:id => Find item.

body -> none

Authorization -> Bearer `<your_token>`

#### Update

UPDATE -> localhost:3030/items/:id => Update item. -> check ./src/services/items/items.hook.ts for more details

body -> raw(json)

Authorization -> Bearer `<your_token>`

#### Patch

PATCH -> localhost:3030/items/:id => Patch item. Only type can be edited. Only user who belogns to todo can edit -> check ./src/services/items/items.hook.ts for more details

body -> raw(json)

Authorization -> Bearer `<your_token>`

#### Remove

DELETE -> localhost:3030/items/:id => Delete item. Only user who belogns to todo can remove item -> check ./src/services/items/items.hook.ts for more details

body -> raw(json)

Authorization -> Bearer `<your_token>`
