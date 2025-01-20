import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router"
import { getPost, updatePost } from "../api/posts"
import { getUsers } from "../api/users"
import { PostForm, postFormValidator } from "../components/PostForm"

function EditPost() {
  const { users, post } = useLoaderData() // Getting data from loader
  console.log(post);
  const { state } = useNavigation()
  const errors = useActionData()
  const isSubmitting = state === "submitting"

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      {/* Pass data to PostForm component */}
      <PostForm
        users={users}
        isSubmitting={isSubmitting}
        errors={errors}
        defaultValues={post}
      />
    </>
  )
}

async function loader({ request: { signal }, params: { postId } }) {
  // First load the post and the users on the edit post page
  const post = getPost(postId, { signal })
  const users = getUsers({ signal })

  return { post: await post, users: await users } // returning to Edit Post()
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData()
  const title = formData.get("title")
  const body = formData.get("body")
  const userId = formData.get("userId")

  const errors = postFormValidator({ title, userId, body })

  if (Object.keys(errors).length > 0) {
    return errors
  }

  // Pass data to updatePost function
  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  )

  return redirect(`/posts/${post.id}`)
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
}
