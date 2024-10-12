import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-xl"
      >
        <h1 className="text-2xl text-white mb-4">Nueva Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
          placeholder="Escribe tu Tarea..."
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
          placeholder="Descripción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Enviar</button>
      </form>
    </div>
  );
}

export default TaskForm;
