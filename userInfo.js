let name = localStorage.getItem("name");
let score = localStorage.getItem("score");

document.querySelector("#name").innerHTML = name;
document.querySelector(".points").innerHTML = score;