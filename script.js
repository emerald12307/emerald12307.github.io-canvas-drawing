//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

//sky
ctx.fillStyle = "#E5D6E5";
ctx.fillRect(0, 0, 500, 400);

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(225, 260, 75, 0, 2 * Math.PI);
ctx.fill();

//water
ctx.fillStyle = "#00CED1";
ctx.fillRect(0, 300, 500, 100);

//coastline
ctx.fillStyle = "white";
ctx.fillRect(0, 300, 500, 15);

//Mountain 1
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(125, 100); //peak
ctx.lineTo(0, 300);
ctx.lineTo(250, 300);
ctx.lineTo(125, 100);
ctx.fill();

//Mountain 2
ctx.fillStyle = "darkgray";
ctx.beginPath();
ctx.moveTo(350, 50); //peak
ctx.lineTo(500, 300);
ctx.lineTo(200, 300);
ctx.lineTo(350, 50);
ctx.fill();

//Mountain 3
ctx.fillStyle = "darkgray";
ctx.beginPath();
ctx.moveTo(0, 70);
ctx.lineTo(100, 300);
ctx.lineTo(0, 300);
ctx.lineTo(0, 50);
ctx.fill();

//Mountain 4
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(500, 100);
ctx.lineTo(400, 300);
ctx.lineTo(500, 300);
ctx.lineTo(500, 100);
ctx.fill();

//Mountain 1 Snow
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(125, 100); //peak
ctx.lineTo(169, 170);
ctx.lineTo(80, 170);
ctx.lineTo(125, 100);
ctx.fill();

//Mountain 2 Snow
ctx.beginPath();
ctx.moveTo(350, 50); //peak
ctx.lineTo(392, 120);
ctx.lineTo(307, 120);
ctx.moveTo(350, 50);
ctx.fill();

//Boat
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(10, 330);
ctx.lineTo(30, 350);
ctx.lineTo(25, 375);
ctx.lineTo(10, 330);
ctx.fill();

ctx.fillRect(25, 350, 100, 25);

ctx.beginPath();
ctx.moveTo(140, 330);
ctx.lineTo(120, 350);
ctx.lineTo(125, 375);
ctx.lineTo(140, 330);
ctx.fill();

//Stickman head 1
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(50, 325, 10, 0, 2 * Math.PI);
ctx.stroke();

//stickman torso 1
ctx.beginPath();
ctx.moveTo(50, 335);
ctx.lineTo(50, 350);
ctx.stroke();

//Stickman arm 1
ctx.beginPath();
ctx.moveTo(50, 340);
ctx.lineTo(75, 348);
ctx.stroke();

//Stickman head 2
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(95, 325, 10, 0, 2 * Math.PI);
ctx.stroke();

//stickman torso 3
ctx.beginPath();
ctx.moveTo(95, 335);
ctx.lineTo(95, 350);
ctx.stroke();

//Stickman arm 1
ctx.beginPath();
ctx.moveTo(95, 340);
ctx.lineTo(75, 348);
ctx.stroke();

//Stick bird
ctx.beginPath();
ctx.moveTo(90, 35);
ctx.lineTo(115, 40);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(115, 40);
ctx.lineTo(140, 35);
ctx.stroke();

//Stickbird 2
ctx.beginPath();
ctx.moveTo(30, 25);
ctx.lineTo(55, 30);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(55, 30);
ctx.lineTo(80, 25);
ctx.stroke();

//stickbird 3
ctx.beginPath();
ctx.moveTo(150, 55);
ctx.lineTo(175, 60);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(175, 60);
ctx.lineTo(200, 55);
ctx.stroke();

//Title
ctx.fillStyle = "black";
ctx.font = "15px Arial";
ctx.fillText("Lake Louise Date", 20, 20);
