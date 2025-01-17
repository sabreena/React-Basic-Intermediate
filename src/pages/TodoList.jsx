import { Link, Form, useLoaderData, useNavigation } from "react-router-dom"
import { TodoItem } from "../components/TodoItem"
import { useEffect, useRef } from "react"

export function TodoList() {
  const { todos, searchParams: { query } } = useLoaderData()
  const { state } = useNavigation()
  const queryRef = useRef()

  useEffect(() => {
    queryRef.current.value = query
  }, [query])

  return (
    <>
      <h1 className="page-title">Todos
      <div className="title-btns">
        <Link to="/new" className="btn">
          new
        </Link>
      </div>
      </h1>
      <Form className="form" method="get" action="/">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" ref= { queryRef } />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>

      {state === "laoding" ? ( "Loading" ) : (
        <ul>
          {todos.map(todo => (
            // spread out all todo properties
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </>
  )
}
