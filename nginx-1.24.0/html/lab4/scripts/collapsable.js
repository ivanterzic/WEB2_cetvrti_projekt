let collapseElement = document.getElementById("collapsable");
let collapseButton = document.getElementById("collapsable-button");
collapseButton.addEventListener("click", function (){
        if (collapseElement.style.display === "none") {
            collapseElement.style.display = "block";
        } else {
            collapseElement.style.display = "none";
        }
}
);


