const url = "http://api.icndb.com/jokes/random"
let result = document.querySelector("#listJoke")

function showAJoke (){
    fetch(url)
    .then (response => response.json())
    .then (jokeObj =>result.innerHTML= (jokeObj.value.joke))
    .catch(error => console.log(error))
}

var btn = document.querySelector("button")
btn.addEventListener("click",showAJoke )