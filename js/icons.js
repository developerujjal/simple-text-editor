// icones stuff

document.getElementById("bold-icon").addEventListener("click", function(){
    let textareFieldElement = document.getElementById("description-field");
    textareFieldElement.style.fontWeight = "bold";
})


document.getElementById("italic-icon").addEventListener("click", function(){
    let textareFieldElement = document.getElementById("description-field");
    textareFieldElement.style.fontStyle = "italic";
})


document.getElementById("underline-icon").addEventListener("click", function(){
    let textareFieldElement = document.getElementById("description-field");
    textareFieldElement.style.textDecoration = "underline";
})


// aligns stuff

document.getElementById("left-align").addEventListener("click", function(){
    let alignFieldElement = document.getElementById("description-field");
    alignFieldElement.style.textAlign = "left";
})


document.getElementById("center-align").addEventListener("click", function(){
    let alignFieldElement = document.getElementById("description-field");
    alignFieldElement.style.textAlign = "center";
})

document.getElementById("right-align").addEventListener("click", function(){
    let alignFieldElement = document.getElementById("description-field");
    alignFieldElement.style.textAlign = "right";
})

document.getElementById("justify-align").addEventListener("click", function(){
    let alignFieldElement = document.getElementById("description-field");
    alignFieldElement.style.textAlign = "justify";
})


// color stuff

document.getElementById("description-field").addEventListener("click", function(){
   
    let inputFieldValue = getValue("color-field");
     
    let inputFieldElement = document.getElementById("description-field");
    inputFieldElement.style.color = inputFieldValue;
})


