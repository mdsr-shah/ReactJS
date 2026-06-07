import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    const [todos, setTodos] = useState([
        { task: "Sample Task", id: uuidv4() }
    ]);

    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        if (newTodo.trim() === "") return;

        setTodos([
            ...todos,
            {
                task: newTodo,
                id: uuidv4()
            }
        ]);

        setNewTodo("");
    };

    const updateTodoList = (event) => {
        setNewTodo(event.target.value);
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTodo}
                onChange={updateTodoList}
            />

            <button onClick={addNewTask}>
                Add Task
            </button>

            <h3>Tasks Todo</h3>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={() => deleteTask(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}