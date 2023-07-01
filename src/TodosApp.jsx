import { useGetTodosQuery } from './store/apis/todosApi'

export const TodosApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery()
  console.log(todos)

  return (
    <>
      <h1>Todos App RTKQuery</h1>
      <hr />

      <h4>isLoading... {isLoading ? 'true' : 'false'}</h4>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? 'Done' : 'Pending'} </strong>
              {todo.title}
            </li>
          )
        })}
      </ul>

      <button>Next Todo</button>
    </>
  )
}
