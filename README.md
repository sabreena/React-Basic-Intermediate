# API Information

The API has the following _new_ endpoints:

- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update a post
- `GET /posts?q=<query>&userId=<userId>` - Returns all of the posts that match the query and userId

# Instructions

1. Create a New Post page that renders out a form that allows the user to create a new post. Don't forget to add a button to the Posts page linking to the New Post page. The form should have the following fields:
   - Title
   - Body
   - Author (User)
2. Create an Edit Post page that renders out a form that allows the user to edit an existing post. The form should be identical to the new post form. Don't forget to add a button to the Post page linking to the Edit Post page.
3. Add a filter to the Posts page that allows the user to filter the posts by a query.

## Bonus:

1. Add a filter to the Posts page that allows the user to filter the posts by the user that wrote the post.
2. Disable the submit button on the New Post and Edit Post pages if the form is in the process of submitting.
3. Handle the following validations on the New Post and Edit Post pages:
   - Title is required
   - Body is required
   - User is required


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
