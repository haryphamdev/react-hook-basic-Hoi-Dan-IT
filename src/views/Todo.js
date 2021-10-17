
const Todo = (props) => {
    //properties 
    // parent => child, top => bottom
    const todos = props.todos;
    return (
        <div className="todos-container">
            <div className="title">
                {props.title}
            </div>
            {todos.map(todo => {
                console.log('>>> check todo list: ', todo)
                return (
                    <li className="todo-child" key={todo.id}> {todo.title}</li>
                )
            })}

            <hr />

        </div>
    )
}

export default Todo;