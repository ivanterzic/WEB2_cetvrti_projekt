let collapseElement = document.getElementById("collapsable");
let collapseButton = document.getElementById("collapsable-button");
console.log(collapseElement);
console.log(collapseButton);
collapseButton.addEventListener("click", function (){
    console.log("clicked");
        if (collapseElement.style.display === "none") {
            collapseElement.style.display = "block";
        } else {
            collapseElement.style.display = "none";
        }
        console.log(collapseElement.style.display)

}
);


