console.log('Hello World!');
const boom = new Audio("sounds/boom.wav");
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const kick = new Audio("sounds/kick.wav");
const openhat = new Audio("sounds/openhat.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tom = new Audio("sounds/tom.wav");

document.getElementById("boom").addEventListener('click',() => {
 boom.play()
 boom.currentTime = 0;
})
document.getElementById("clap").addEventListener('click',() => {
 clap.play()
 clap.currentTime = 0;
})
document.getElementById("hihat").addEventListener('click',() => {
 hihat.play()
 hihat.currentTime = 0;
})
document.getElementById("kick").addEventListener('click',() => {
 kick.play()
 kick.currentTime = 0;
})
document.getElementById("openhat").addEventListener('click',() => {
 openhat.play()
 openhat.currentTime = 0;
})
document.getElementById("ride").addEventListener('click',() => {
 ride.play()
 ride.currentTime = 0;
})
document.getElementById("snare").addEventListener('click',() => {
 snare.play()
 snare.currentTime = 0;
})
document.getElementById("tom").addEventListener('click',() => {
 tom.play()
 tom.currentTime = 0;
})
const randomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data.author);
}