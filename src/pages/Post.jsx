import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { getComments } from "../api/comments"
import { getPost, deletePost } from "../api/posts"
import { getUser } from "../api/users"

function Post() {
  const { comments, post, user } = useLoaderData()
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      // Wait for the deletePost function to complete
      await deletePost(post.id);
      console.log("Post Deleted");
      // Navigate to the posts list after deletion
      navigate("/posts");
    }
  };

  return (
    <>
      <h1 className="page-title">
        {post.title}
        <div className="title-btns">
          <Link className="btn btn-outline" to="edit">
            Edit
          </Link>
        </div>
        <div className="title-btns">
          <button className="btn btn-outline" onClick={handleDelete}>Delete Post</button>
        </div>
        { console.log("handle delete in async, and rest executes") }
      </h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>

      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map(comment => (
          <div key={comment.id} className="card">
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

async function loader({ request: { signal }, params: { postId } }) {
  const comments = getComments(postId, { signal })
  const post = await getPost(postId, { signal })
  const user = getUser(post.userId, { signal })

  return { comments: await comments, post, user: await user }
}

export const postRoute = {
  loader,
  element: <Post />,
}
