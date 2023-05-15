const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petalImg = new Image();
petalImg.src = 'rose.png'; 

const petals = [];

class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -50;
    this.size = Math.random() * 10 + 10;
    this.speed = Math.random() * 5 + 1;
    this.fallSpeed = Math.random() * 3 + 1;
  }

  update() {
    this.y += this.fallSpeed;
    this.x += Math.sin(this.y / 50) * 2;
    if (this.y > canvas.height) {
      this.y = -50;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.drawImage(petalImg, this.x, this.y, this.size, this.size);
  }
}

function createPetals() {
  for (let i = 0; i < 50; i++) {
    const petal = new Petal();
    petals.push(petal);
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  petals.forEach((petal) => {
    petal.update();
    petal.draw();
  });
}

createPetals();
animate();


function  nimmia()
{
    var d =document.getElementById("text");
   var crs = [ "blue","orange","darkred","yellow","pink","white","purple"];
   var currentc = d.style.color;
   var i = crs.indexOf(currentc);
   if(i == crs.length-1)
   {
    d.style.color= crs[0];   
   }
   else 
   {
    d.style.color = crs[i+1];
   }
}