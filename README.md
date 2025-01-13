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

1. Create a nav bar that contains links to the following pages:
   - Posts
   - Users
   - Todos
2. Create a Posts page that renders out all of the posts from the API in a card based grid where each card contains the title, body, and a link to view the post.
3. Create a Users page that renders out all of the users from the API in a card based grid where each card contains the user name, company name, email, website, and a link to view the user.
4. Create a Todos page that renders out all of the todos from the API in a list where each item contains the todo title and is crossed off if completed.
5. Create a Post page that renders out the post title, and body.
6. Create a User page that renders out the user name, company name, email, website, and address.

## Bonus:

1. Add a loading spinner that shows while the data is being fetched. Make sure this only renders over the main content area and does not cover up the navbar.
2. Add a 404 error page that still shows the navbar, but renders a 404 error message inside the main content area.
3. Add an error page that renders a generic error message in production, but renders the full error message and stack trace in development.
4. On the Post page render out all of the comments for that post as well as the name for the user that created the post. Make the user name is a link to the user page.
5. On the User page render out all of the posts that user created in a grid format as well as all the todos that user has in a list format.

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
