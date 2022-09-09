

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

// ctx.beginPath()
// ctx.rect(10, 50, 150, 130);
// ctx.stroke();
// ctx.closePath()








var x=100
var y=75
var dx=1


function animate(){
    
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)



    
    
    var radius=15
    

    ctx.strokeStyle='white'
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 140);
    ctx.stroke();
    ctx.closePath()



    ctx.beginPath();
    ctx.moveTo(290, 10);
    ctx.lineTo(290, 140);
    ctx.stroke();
    ctx.closePath()
    
    ctx.beginPath();
    ctx.arc(x,y,15,0,Math.PI*2,false);
    ctx.strokeStyle='white';
    ctx.fillStyle='white'
    ctx.fill()
    ctx.stroke();
    



    if(x+radius>290||x<25){
        
        dx=-dx
    } 
console.log(dx)
x+=dx
    
}

animate()