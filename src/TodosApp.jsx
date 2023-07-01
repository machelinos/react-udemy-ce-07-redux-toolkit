import { useState } from 'react'
import { useGetTodoQuery } from './store/apis/todosApi'

export const TodosApp = () => {
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const handleNext = () => {
    setTodoId(todoId + 1)
  }

  const handlePrev = () => {
    if (todoId <= 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todos App RTKQuery</h1>
      <hr />

      <h4>isLoading... {isLoading ? 'true' : 'false'}</h4>

      {/*       <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
              {todo.title}
            </li>
          )
        })}
      </ul> */}

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={handlePrev}>Previous Todo</button>

      <button onClick={handleNext}>Next Todo</button>
    </>
  )
}
