let choose_button = document.getElementById("choose");
let dropdown = document.getElementById("dropdown");


choose_button.onclick = function(event) {
    event.preventDefault();
    let choice = dropdown.value;
    let body = document.body;

    if (choice == "blue"){
        body.style.backgroundColor = "blue";
    }
    if (choice == "black"){
     body.style.backgroundColor = "black";
    }
    if (choice == "red"){
        body.style.backgroundColor = "red";
    }
    if (choice == "grey"){
        body.style.backgroundColor = "grey";
    }
    if (choice == "orange"){
        body.style.backgroundColor = "orange";
    }
    if (choice == "gam"){
        body.style.backgroundColor = "#E49B0F";
    }










let time = 0;
let counterElement = document.getElementById("time");

function updateCounter(){
    time++;
    counterElement.textContent = time;
}

setInterval(updateCounter, 60 * 60 * 1000);
}