const texts = [
"Software Developer",
"AI Enthusiast",
"Data Science Learner",
"Future Software Engineer",
"UPSC Aspirant"
];

let count = 0;

setInterval(() => {

document.getElementById("typing").innerText =
texts[count];

count++;

if(count >= texts.length){
count = 0;
}

},2000);
if(window.innerWidth > 768){

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});

}
const starsContainer = document.querySelector('.stars');

let starCount = window.innerWidth <= 768 ? 20 : 80;

for(let i = 0; i < starCount; i++){

    const star = document.createElement('div');

    star.classList.add('star');

    const size = Math.random() * 3 + 1;

    star.style.width = size + 'px';
    star.style.height = size + 'px';

    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';

    star.style.animationDelay = Math.random() * 3 + 's';

    starsContainer.appendChild(star);
}
