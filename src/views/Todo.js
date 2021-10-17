
const Todo = (props) => {
    //properties 
    // parent => child, top => bottom
    const todos = props.todos;
    return (
        <div className="todos-container">
            {todos.map(todo => {
                console.log('>>> check todo list: ', todo)
                return (
                    <li className="todo-child" key={todo.id}> {todo.title}</li>
                )
            })}

        </div>
    )
}

export default Todo;