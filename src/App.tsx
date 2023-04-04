import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, DeleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

interface Todo {
  text: string;
  _id: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [isUpdating, SetIsUpdatinig] = useState(false);
  const [todoId, SetTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (todoId: string, text: string) => {
    SetIsUpdatinig(true);
    setText(text);
    SetTodoId(todoId);
  };

  return (
    <div className="App">
      <h1>Shanu2409</h1>
      <h1>Todo App</h1>
      <div className="top">
        <input
          type="text"
          placeholder="Add TODO "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className="add"
          onClick={
            isUpdating
              ? () =>
                  updateTodo({ todoId, text, setTodo, setText, SetIsUpdatinig })
              : () => addTodo({ text, setText, setTodo })
          }
        >
          {isUpdating ? "Update" : "Add"}
        </div>
      </div>

      <div className="list">
        {todo.map((item, index) => (
          <Todo
            key={item._id}
            index={index}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            DelteTodo={() => DeleteTodo(item._id, setTodo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
