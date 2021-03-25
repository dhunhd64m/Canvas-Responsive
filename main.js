var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    lastPositionOfX = current_x;
    lastPositionOfY = current_y
}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastPositionOfX, lastPositionOfY);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    lastPositionOfX = current_x;
    lastPositionOfY = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}