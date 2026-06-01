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
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});