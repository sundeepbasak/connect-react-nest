# Nest-JS Tutorial
### connect client(react app) to server(nest-js app)

### Server (Nest-JS App)
- modules
- providers(services)
- controllers
- middlewares


### Folder Structure
- src
  - cats
    - dto
    - interfaces
    - entities
    - cats.module.ts
    - cats.controller.ts
    - cats.service.ts
  
  - app.module.ts
  - main.ts

### Modules

### Providers (Services)

### Controllers

### Middlewares

### Connecting to database
Nest is database agnostic, allowing you to easily integrate with any SQL or NoSQL database.
- we can use TypeORM, Prisma, MikroORM, Sequelize, Mongoose etc. to connect with database.
- Nest provides tight integration with TypeORM and Sequelize out-of-the-box with the @nestjs/typeorm and @nestjs/sequelize packages respectively, 

### Connecting to MongoDB database 
we can either use built-in TypeORM module or Mongoose to connect to mongodb.
- to connect it using mongoose, we install: `npm i @nestjs/mongoose mongoose`

- In Mongoose, everything is derived from a Schema. Schemas are used to define Models. Models are responsible for creating and reading documents from the underlying mongodb database.
- a schema is created using @Schema() decorator
- The @Prop() decorator defines a property in the document. 


> import schema(cat.schema.ts) to cats.module.ts
> once schema is registered, we can use it in the cats.service.ts using `@InjectModel() decorator`