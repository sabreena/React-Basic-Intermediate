# API Information

The API has the following endpoints:

- `GET /posts` - Returns all of the posts
- `GET /posts/:id` - Returns a single post
- `GET /posts/:id/comments` - Returns all of the comments for a single post
- `GET /users` - Returns all of the users
- `GET /users/:id` - Returns a single user
- `GET /posts?userId=<userId>` - Returns all of the posts for a single user
- `GET /todos` - Returns all of the todos
- `GET /todos?userId=<userId>` - Returns all of the todos for a single user

# Instructions

Create a new To Do

# Commands

Install dependencies:

npm install

npm i react-router-dom

npm i axios

Run the project:

npm run dev

## Inside api

cd api

npm i

npm run dev

This should start up an API on http://localhost:3000. This API is built on the json-server package, which is a great tool for quickly building fake APIs.
