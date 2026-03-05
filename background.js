
const canvas=document.getElementById("bg")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<160;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.7,
dy:(Math.random()-0.5)*0.7
})
}

function animate(){

ctx.fillStyle="rgba(10, 5, 40, 0.25)"
ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.dx
p.y+=p.dy

if(p.x<0||p.x>canvas.width)p.dx*=-1
if(p.y<0||p.y>canvas.height)p.dy*=-1

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="rgba(255, 0, 200, 0.9)"
ctx.fill()
ctx.shadowblur=10
ctx.shadowColor="rgba(255, 0, 200, 0.9)"

})

requestAnimationFrame(animate)
}

animate()
