import { Form, Link, useNavigation, useActionData } from 'react-router-dom'

export function NewTodo() {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting" || state === "loading"

  const errorMessage = useActionData();

  return (
    <div className="container">
    <h1 className="page-title">New Todo</h1>
    <Form method="post" className="form">
      <div> { errorMessage }</div>
      <div className="form-row">
        <div className="form-group error">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
      </div>
      <div className="form-row form-btn-row">
        <Link to=".." className="btn btn-outline">Back</Link>
        <button disabled={ isSubmitting } className="btn">{ isSubmitting ? "Loading": "Create" }</button>
      </div>
    </Form>
    </div>
  )
}