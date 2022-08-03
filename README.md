# todo

> Todo List

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/todo
   npm install
   ```
3. Start your app

   ```
   npm start
   ```

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

## Rest Api

#### Get and create users

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

---

GET -> localhost:3030/users => Get current register user.

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

#### Get and create todos

POST -> localhost:3030/todos => Create todo list

body -> raw(json)

Authorization -> Bearer <your_token>

body:

```
{

    "title":"Some title 1",
    "password":"marek"

}
```

---

GET -> localhost:3030/todos => Get todos list

body -> none

Authorization -> Bearer <your_token>

GET -> localhost:3030/todos/:id => Get todos list

localhost:3030/todos/1 -> Get todo where id == 1

body -> none

Authorization -> none

## Validations & Constraints

#### Constraints

-> SQL level validation => ./src/models/*

#### Validation

-> javascript level validation => ./src/models/*
