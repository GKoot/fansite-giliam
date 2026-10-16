let java = document.querySelector("#java");
java.style.color = "red";
let knop = document.querySelector("#knop");
let myImage = document.querySelector("#myImage");
let text = document.querySelector(".text");
let mySubmit = document.querySelector("#mySubmit");
// let clicked = false

java.addEventListener("click",function(){
    java.style.color = "blue";
    java.innerHTML = "bedankt voor het lezen van deze pagina van de website, je kunt nu naar de andere pagina";
    knop.innerHTML = "tekst van muziek theorie";
    }
)

mySubmit.addEventListener("click", swapper);

function swapper(){
    if (myInput.value == "bas"){
    myImage.src = "img/bass.jpg";
    console.log( "works")
}
    else {
    myImage.src = "img/bes.jpg";
    console.log("doesnt")
}
}



