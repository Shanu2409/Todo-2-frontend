import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  text: string;
  updateMode: () => void;
  DelteTodo: () => void;
  index: number;
}

const Todo = ({ text, updateMode, DelteTodo, index }: Props) => {
  return (
    <div className="todo">
      <div className="sr">{index + 1}</div>
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={DelteTodo} />
      </div>
    </div>
  );
};

export default Todo;
