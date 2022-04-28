import axios from "axios";

const url = "https://my-json-server.typicode.com/typicode/demo/comments/1";

interface Todo {
  id: number;
  body: string;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const body = todo.body;

  logTodo(id, body);
});

const logTodo = (id: number, body: string) => {
  console.log(`
    The todo with ID: ${id}
    Has a body of: ${body}
  `);
};
