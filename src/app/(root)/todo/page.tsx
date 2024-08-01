"use client"
import { useState } from "react";
import { ToDo } from "../../../components/todo";

const Layout = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    todo.push(input);
    setInput("");
  };

  const deleteTodo = (index: number) => {
    const updatedTodos = todo.filter((a: string, i: number) => i !== index);
    setTodo(updatedTodos);
  };

  return (
    <>
      <div className="flex h-screen w-screen bg-slate-800 justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mb-8">ToDo List: Manage your daily tasks.</h1>
        <form className="flex w-[80%] gap-6 mb-16">
          <input
            className="flex flex-1 p-4 rounded-md focus:outline-none border-2 border-transparent focus:border-zinc-500 focus:border-2"
            type="text"
            placeholder="Enter todo"
            onChange={handleChange}
            value={input}
          />
          <button
            type="button"
            className="bg-violet-950 px-12 rounded-md text-green-50"
            onClick={() => addTodo()}
          >
            Add
          </button>
        </form>
        {todo.map((x: string, i: number) => {
          return (
            <ToDo todo={x} key={i} deleteTodo={() => deleteTodo(i)} />
          );
        })}
      </div>
    </>
  );
};

export default Layout;