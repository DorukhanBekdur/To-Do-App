function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
