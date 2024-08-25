import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";
import TodoDate from "./TodoDate";

const TodoKey = "reactTodo";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(TodoKey);
    if (!rawTodos) return []; // If rawTodos is null, return an empty array
    try {
      return JSON.parse(rawTodos);
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      return []; // In case of error, return an empty array
    }
  });

  useEffect(() => {
    localStorage.setItem(TodoKey, JSON.stringify(task));
  }, [task]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevData) => [...prevData, { id, content, checked }]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  const handleClearTodo = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <header className="mb-6 text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-3">Todo List</h1>
          <TodoDate />
        </header>

        <Form onAddTodo={handleFormSubmit} />

        <section className="mt-6 w-full max-w-lg">
          <ul className="list-none p-0">
            {task.map((currTask) => (
              <List
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            ))}
          </ul>
        </section>
        <section>
          <button
            className="mt-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-200"
            onClick={handleClearTodo}
          >
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};
