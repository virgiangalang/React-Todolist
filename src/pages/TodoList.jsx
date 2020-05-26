import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("only 10 todos allowed");
    }
  };
  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const clearTodos = () => setTodos([]);
  const showAddTogle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddTogle={showAddTogle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
