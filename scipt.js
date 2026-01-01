const cursor = document.getElementById('cursor');
const grow = document.getElementById('cursor-grow');
document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
    grow.style.left = event.x - 150 + "px";
    grow.style.top = event.y - 150 + "px";

})