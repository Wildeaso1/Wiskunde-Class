// JavaScript source code
class Point {
    constructor(x, y, radius, color,draggable) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.draggable = draggable || false;
        if (draggable) 
            {
                this.drag();
            }
    }

    draw() 
    {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
        context.stroke();
    }

    drag()
    {
        addEventListener('mousedown', (e) => 
        {
            console.log(e.clientX, e.clientY);
        })
    }
}
