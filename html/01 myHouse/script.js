const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

context.beginPath();
context.moveTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.fillStyle = "#ff0000";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.lineTo(200,500);
context.fillStyle = "#ffffff";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(600,400);
context.lineTo(700,200);
context.lineTo(800,300);
context.fillStyle = "#bbbbbb";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(600,400);
context.lineTo(800,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.fillStyle = "#bbbbbb";
context.closePath();
context.stroke();
context.fill();