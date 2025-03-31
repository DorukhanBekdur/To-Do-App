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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">📝 New Task</h2>
          <TodoForm addTodo={addTodo} />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">
            📋 Active Tasks
          </h2>
          <TodoList
            todos={todos.filter((t) => !t.completed)}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-center">✅ Completed</h2>
          <TodoList
            todos={todos.filter((t) => t.completed)}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
