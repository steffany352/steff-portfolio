const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) =>
{

glow.style.left = e.clientX - 150 + "px";
glow.style.top = e.clientY - 150 + "px";

});

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(
".about,.skills,.projects,.contact"
).forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i = 0; i < 80; i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        radius:Math.random()*2 + 1,

        speedX:(Math.random()-0.5)*0.5,
        speedY:(Math.random()-0.5)*0.5

    });

}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((p)=>{

        p.x += p.speedX;
        p.y += p.speedY;

        if(p.x < 0 || p.x > canvas.width)
            p.speedX *= -1;

        if(p.y < 0 || p.y > canvas.height)
            p.speedY *= -1;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        "rgba(212,175,55,0.6)";

        ctx.fill();

    });

    requestAnimationFrame(
        animate
    );

}

animate();

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .style.opacity = "0";

        setTimeout(()=>{

            document
            .getElementById("loader")
            .style.display = "none";

        },1000);

    },2500);

});


const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function() {
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 1000);
    });
}