import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yeni görev ekle..."
        className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-black placeholder:text-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-800 shadow-inner transition"
      />

      <button
        type="submit"
        className="bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-500 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
