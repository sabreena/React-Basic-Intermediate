import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom"
import { createPost } from "../api/posts"
import { getUsers } from "../api/users"
import { PostForm, postFormValidator } from "../components/PostForm"

function NewPost() {
  const users = useLoaderData()
  const { state } = useNavigation()
  const errors = useActionData()
  const isSubmitting = state === "submitting"

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} isSubmitting={isSubmitting} errors={errors} />
    </>
  )
}

async function action({ request }) {
  // Get Form data using action function
  const formData = await request.formData()
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")
  
  // check for erros using postFormValidator function
  const errors = postFormValidator({ title, userId, body })

  if (Object.keys(errors).length > 0) {
    console.log(Object.keys(errors))
    return errors
  }

  // Create a new post using the data from the form
  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`) // Redirect to the new post with a new post id
}

function loader({ request: { signal } }) {
  return getUsers({ signal })
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
}
