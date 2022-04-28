import axios from "axios";

const url = "https://my-json-server.typicode.com/typicode/demo/comments/1";

axios.get(url).then((response) => {
  console.log(response.data);
});
