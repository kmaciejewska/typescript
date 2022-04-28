"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://my-json-server.typicode.com/typicode/demo/comments/1";
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
