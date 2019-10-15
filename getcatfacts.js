console.log("We added javascript :)");

function get(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send();
    return JSON.parse(xhr.responseText);
}

var joke_text = document.getElementById("joke");

function createButtons(){
    var buttons = document.getElementById("buttons");
    var categories = get("https://api.chucknorris.io/jokes/categories");
    /* categories in an array */
    for(var i = 0; i < categories.length; i++){
        var joke_but = document.createElement("button");
        joke_but.innerText = categories[i];
        let category = categories[i];
        joke_but.addEventListener("click", function(){
            console.log("Has been clicked: " + category);
            var joke = get("https://api.chucknorris.io/jokes/random?category=" + category);
            joke_text.innerText = joke.value;
        })

        var joke_li = document.createElement("li");
        joke_li.appendChild(joke_but);
        buttons.appendChild(joke_li);
    }

}

createButtons();
