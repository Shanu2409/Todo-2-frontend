import axios from "axios";

const baseUrl = "https://todo-2-ly78.onrender.com";

interface Todo {
  text: string;
  _id: string;
}

const getAllTodo = (setTodo: any) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ->", data);
    setTodo(data);
  });
};

const addTodo = ({
  text,
  setText,
  setTodo,
}: {
  text: string;
  setText: (text: string) => void;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  axios.post(baseUrl + "/save", { text }).then((data) => {
    console.log("log data --> ", data);
    setText("");
    getAllTodo(setTodo);
  });
};

const updateTodo = ({
  todoId,
  text,
  setTodo,
  setText,
  SetIsUpdatinig,
}: {
  text: string;
  setText: (text: string) => void;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoId: string;
  SetIsUpdatinig: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  axios
    .put(baseUrl + "/update/" + todoId, { text })
    .then((data) => {
      console.log("log data --> ", data);
      setText("");
      SetIsUpdatinig(false);
      getAllTodo(setTodo);
    })
    .catch((e) => console.log("error : ", e));
};

const DeleteTodo = (
  todoId: string,
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  axios
    .delete(baseUrl + "/delete/" + todoId)
    .then((data) => {
      console.log("log data --> ", data);
      getAllTodo(setTodo);
    })
    .catch((e) => console.log("error : ", e));
};

export { getAllTodo, addTodo, updateTodo, DeleteTodo };
