const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const app = express();
const { posts } = require("./data/db");
const { cars } = require("./data/cars");
const { findById } = require("./helper/helper");
const { response } = require("express");

//Middleware//

app.use(cors());
app.use(express.json());

// console.log("posts===", posts);

app.get("/", (request, response) => {
  response.json("Hello world");
});

//VADINAMA ISRORINE FUNCKCIJA
app.get("/api/posts", postsController);
function postsController(request, response) {
  response.json([posts]);
}

//GAUTI VIENA POSTA IS ARRAY
app.get("/api/posts/3", (request, response) => {
  const postId = 3;
  const found = findById(posts, postId);

  response.json(found);
});

//CAO DALIS - SUSIKURTI CARS ARRAY, JI PADUOTI SU GET IR POST

app.get("/api/cars", (request, response) => {
  response.json(cars);
});

app.post("/api/cars", (request, response) => {
  const newCarObj = request.body;
  cars.push(newCarObj);
  response.json("Created a post");
});

//SUKURTI POST//
app.post("/api/posts", (request, response) => {
  const newPostObj = request.body;
  console.log("newPostObj===", newPostObj);
  //ISIDEDAM NAUJA OBJ I MASYVA
  posts.push(newPostObj);
  response.json("trying to create post");
});

app.listen(port, () => console.log("Howdy express is online", port));
