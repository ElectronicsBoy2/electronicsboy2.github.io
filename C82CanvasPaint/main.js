canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
var width_of_line = 1;

canvas.addEventListener("mousemove", mouseevent4);
function mouseevent4(e) {
    var currentposX = e.clientX - canvas.offsetLeft;
    var currentposY = e.clientY - canvas.offsetTop;

    width_of_line = document.getElementById("width_input").value;
    var color = document.getElementById("circle_color").value;

    // console.log(color);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.arc(currentposX, currentposY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
