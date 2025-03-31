function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="flex items-start justify-between p-2 border-b w-full">
      <div
        className={`flex-1 cursor-pointer break-words overflow-hidden text-pre-wrap ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-bold cursor-pointer ml-2 flex-shrink-0"
      >
        ✕
      </button>
    </div>
  );
}

export default TodoItem;
