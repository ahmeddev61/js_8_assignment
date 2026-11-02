// 1
let heading = document.getElementById("head");
heading.textContent = "selected by id";
// 2
let para = document.getElementsByTagName("p");
para[0].textContent = "first paragraph changed";
// 3
let btn = document.getElementsByClassName("btn");
btn[1].textContent = "click me";
// 4
let query = document.querySelector("#heading");
query.textContent = "heading change";

let lists = document.getElementsByTagName("li");
for (i = 0; i < lists.length; i++) {
  lists[i].style.color = "green";
}

let stl = document.getElementsByClassName("para");
stl[0].style.backgroundColor = "pink";
stl[0].style.fontSize = "18px";
stl[0].style.color = "blue";
