import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTodo from "../../components/NewTodo";
import TodoList from "../../components/TodoList";

const Main = () => {
    const [todos, setTodos] = useState([]);

    const onNewTodo = (value) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                title: value,
                checked: false,
            },
        ]);
    };

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">Todo</h1>
            </header>

            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </section>
        </section>
    );
};

export default Main;