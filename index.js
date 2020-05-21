import CustomHTTP from "./custom-http.js";

const customHttp = new CustomHTTP();

document.getElementById("getBtn").addEventListener("click", get);
document.getElementById("postBtn").addEventListener("click", post);
document.getElementById("putBtn").addEventListener("click", put);
document.getElementById("deleteBtn").addEventListener("click", deletePost);

// GET REQUEST

function get() {
  customHttp.get(
    "https://jsonplaceholder.typicode.com/posts",
    (error, posts) => {
      if (error) {
        console.error(error);
      } else {
        console.log(posts);
      }
    }
  );
}

const data = { title: "Custom Title", Body: "Custom Body" };

// POST REQUEST
function post() {
  customHttp.post(
    "https://jsonplaceholder.typicode.com/posts",
    data,
    (err, post) => {
      if (err) {
        console.error(err);
      } else {
        console.log(post);
      }
    }
  );
}

// PUT REQUEST
function put() {
  customHttp.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    data,
    (err, post) => {
      if (err) {
        console.error(err);
      } else {
        console.log(post);
      }
    }
  );
}

// DELETE REQUEST
function deletePost() {
  customHttp.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    (err, post) => {
      if (err) {
        console.error(err);
      } else {
        console.log(post);
      }
    }
  );
}
