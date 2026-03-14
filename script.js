function startSurprise(){

document.getElementById("startScreen").style.display="none";
document.getElementById("mainContent").style.display="block";

/* start music */
document.getElementById("bgMusic").play();

/* start petals once */
startPetals();

}


/* LETTER POPUP */

function openLetter(){

document.getElementById("letter").style.display="flex";

/* extra flowers when letter opens */
startPetals();

}

function closeLetter(){
document.getElementById("letter").style.display="none";
}


/* PHOTO SLIDESHOW */

let slides=document.querySelectorAll(".slide");
let index=0;

function showSlides(){

slides.forEach(slide=>{
slide.classList.remove("active");
});

index++;

if(index>=slides.length){
index=0;
}

slides[index].classList.add("active");

}

setInterval(showSlides,3000);


/* FLOATING HEARTS */

function createHeart(){

let heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,900);


/* ROSE / FLOWER PETALS */

let petalInterval;

function startPetals(){

if(!petalInterval){

petalInterval=setInterval(createPetal,200);

}

}

function createPetal(){

let petal=document.createElement("span");

/* random flowers */

let flowers=["🌹","🌸","🌺","💮"];

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.position="fixed";
petal.style.left=Math.random()*100+"%";
petal.style.top="-20px";
petal.style.fontSize="22px";
petal.style.animation="fall 5s linear";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},5000);

}


/* LOVE COUNTER */

function updateLoveCounter(){

let startDate=new Date("March 6, 2022");
let today=new Date();

let diff=today-startDate;

let days=Math.floor(diff/(1000*60*60*24));

document.getElementById("loveCounter").innerHTML=
"We have been together for "+days+" days 💗";

}

updateLoveCounter();
