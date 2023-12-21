# Todo List App
![alt text](public/logo.jpg "survaii logo")

In this task we will need you to create a simple todo list app with some requirements. 
Your app should have 2 views, one for the `listing` and another to display todo `details`.
We should be able to create, read, update and delete a todo, therefore you can create an extra view to handle
create/update operations, or you can decide to create a modal/pop-up to handle it. From the detail page of a todo
we need to be able to edit it or remove it. 
The data you will use are from a fake GraphQL server so some actions like update, create and delete won't really do something, it is just for test purpose. 

# Start GraphQL server

To start the fake GraphQL Server type this command from the root of this project (make sure to have [Docker](https://www.docker.com/) running on your machine)
```bash
docker run -v=${PWD}:/workdir -p=9002:9002 apisguru/graphql-faker ./todo.graphql
```
The server will be available at `http://localhost:9002/graphql`

# Requirements

- You must use one of these two frameworks [ReactJS](https://reactjs.org/) or [NextJS](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- You must use a GraphQL client of your choice to fetch data (bonus if you use Relay or Apollo Client)
- Your application should compile

Do not hesitate to write to us at `contact@survaii.io` if you have any questions.