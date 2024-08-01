import { MdOutlineDoneOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

interface ToDoProps {
    todo: string;
    deleteTodo: () => void;
  }

export const ToDo:React.FC<ToDoProps> = (props) => {
  const [done, setDone] = useState(false);
  return (
    <>
      <div className="flex justify-between w-[80%] gap-7 mb-4">
        <h3
          className={`flex flex-1 bg-slate-600 px-4 py-3 border border-dashed border-zinc-600 font-semibold rounded-md ${
            done
              ? "line-through decoration-wavy bg-slate-400 border-green-900"
              : ""
          }`}
        >
          {props.todo}
        </h3>
        <div className="flex gap-4">
          <button
            disabled={done}
            type="button"
            className={`bg-zinc-400 p-4 rounded-md text-green-50 text-xl ${
              done ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => setDone(true)}
          >
            <MdOutlineDoneOutline />
          </button>
          <button
            type="button"
            className="bg-red-700 p-4 rounded-md text-green-50 text-xl"
            onClick={props.deleteTodo}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </>
  );
};