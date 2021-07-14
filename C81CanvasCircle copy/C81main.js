canvas = document.getElementById("myCanvas");
canvasContext = canvas.getContext("2d");
color = "gray";
penWidth = 2;

//canvas.addEventListener("click", canvasClickEvent);

var x;
var y;

canvasContext.beginPath();
canvasContext.strokeStyle = color;
canvasContext.lineWidth = penWidth;
canvasContext.rect(150, 143, 430, 200);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.strokeStyle = "green";
canvasContext.lineWidth = penWidth;
canvasContext.arc(250, 210, 40, 0, 2 * Math.PI);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.strokeStyle = "red";
canvasContext.lineWidth = penWidth;
canvasContext.arc(350, 210, 40, 0, 2 * Math.PI);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.strokeStyle = "blue";
canvasContext.lineWidth = penWidth;
canvasContext.arc(450, 210, 40, 0, 2 * Math.PI);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.strokeStyle = "yellow";
canvasContext.lineWidth = penWidth;
canvasContext.arc(300, 250, 40, 0, 2 * Math.PI);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.strokeStyle = "white";
canvasContext.lineWidth = penWidth;
canvasContext.arc(400, 250, 40, 0, 2 * Math.PI);
canvasContext.stroke();

/*
function canvasClickEvent(e) {
    color = document.getElementById("color").value;
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("Mouse clicked at " + mouseX + ", " + mouseY);
    draw(mouseX - 40, mouseY - 40);
}

function draw(x, y) {
    canvasContext.beginPath();
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = penWidth;
    canvasContext.arc(x + 40, y + 40, 40, 0, 2 * Math.PI);
    canvasContext.fillRect(x, y, 80, 80);
    canvasContext.stroke();
}

function clearArea() {
    color = document.getElementById("color").value;

    canvasContext.beginPath();

    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = penWidth;

    canvasContext.fillRect(0, 0, 800, 600);
    canvasContext.stroke();
}
*/

function button1clicked() {
    
}