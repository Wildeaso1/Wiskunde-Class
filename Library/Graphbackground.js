class GraphBackground
{
    constructor()
    {
        this.alpha = 0.3;
    }

    draw(){
        for (let index = 0; index < height; index++) {
            if (index%20 == 0) {
                    if (index%100 == 0) 
                    {
                        context.lineWidth = "5";
                    } 
                    else
                    {
                        context.lineWidth = "1";
                    }
                context.strokeStyle = "rgba(0,0,0," + this.alpha + ")";
                context.beginPath();
                context.moveTo(0,index);
                context.lineTo(width,index);
                context.closePath();    
                context.stroke(); 
            }
            
    }

    for (let index = 0; index < width; index++) 
    {
        if (index%20 == 0) 
        {
            if (index%100 == 0) 
            {
                context.lineWidth = "5";
            } 
            else
            {
                context.lineWidth = "1";
            }
        context.strokeStyle = "rgba(0,0,0," + this.alpha + ")";
        context.beginPath();
        context.moveTo(index,0);
        context.lineTo(index,width);
        context.closePath();    
        context.stroke(); 
        }
    }
   
    }
}