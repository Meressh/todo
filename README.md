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

sequelize model:generate --name Users --attributes email:string,password:string

sequelize model:generate --name ListUsers --attributes userId:integer,todoId:integer

sequelize model:generate --name Todos --attributes title:string

sequelize model:generate --name Items --attributes title:string,text:text,deadline:string,userId:integer,type:string,todoId:integer


sequelize db:migrate

sequelize db:migrate:undo

sequelize db:migrate:undo:all

## Table seeders

sequelize seed:generate --name Users

sequelize seed:generate --name ListUsers

sequelize seed:generate --name Todos

sequelize seed:generate --name Items


sequelize db:seed:all

sequelize db:seed:undo

sequelize db:seed:undo:all
