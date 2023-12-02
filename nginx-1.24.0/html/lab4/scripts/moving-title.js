const titleElement = document.getElementById("title");
console.log(titleElement);
titleElement.style.position = "absolute";
let position = 0;
let direction = 1; 
setInterval(() => {
    position += direction;
    titleElement.style.left = position + "px";
    if (position >= window.innerWidth - titleElement.offsetWidth) {
        direction = -1; 
    } else if (position <= 0) {
        direction = 1; 
    }
}, 10);
