import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React" },
    { text: "Learning React Hooks" },
    { text: "Learning styling in React" }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };
  const showAddTogle = () => setShowAdd(!showAdd);

  console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddTogle={showAddTogle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
