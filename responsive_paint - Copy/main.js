var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var screen_width = screen.width;
var new_width = screen_width - 70;

var new_height = screen.height - 300;

if(screen_width < 992) {
    document.getElementById('myCanvas').width = new_width;
    document.getElementById('myCanvas').height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft; 
    last_position_of_x = e.touches[0].clientY - canvas.offsetTop; 
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

    console.log("my_touchmove");

        var current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        var current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // if () {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.arc(current_position_of_touch_x, current_position_of_touch_y, 40, 0, Math.PI * 2);
    ctx.stroke();
    // }

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}

