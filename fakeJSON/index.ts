import axios from "axios";

const url = "https://my-json-server.typicode.com/typicode/demo/comments/1";

axios.get(url).then((response) => {
  const todo = response.data;

  const id = todo.id;
  const body = todo.body;

  console.log(`
    The todo with ID: ${id}
    Has a body of: ${body}
  `);
});
