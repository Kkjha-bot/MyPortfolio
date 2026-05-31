const texts = [
"Software Developer",
"AI Enthusiast",
"Web Developer",
"Problem Solver"
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