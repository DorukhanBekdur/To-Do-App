import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white">
      <div className="flex-grow px-6 py-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg min-h-[200px]">
          <h2 className="text-xl font-bold mb-4 text-center">📝 New Task</h2>
          <TodoForm addTodo={addTodo} />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg min-h-[200px]">
          <h2 className="text-xl font-bold mb-4 text-center">
            📋 Active Tasks
          </h2>
          <TodoList
            todos={todos.filter((t) => !t.completed)}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg min-h-[200px]">
          <h2 className="text-xl font-bold mb-4 text-center">✅ Completed</h2>
          <TodoList
            todos={todos.filter((t) => t.completed)}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>

      <footer className="text-center text-sm text-white/40 py-4">
        Designed & developed by Dorukhan Bekdur – {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
