const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = canvas.width = 600;
const height = canvas.height = 600;
const scale = 1;
const fps = 60;
const secondsToUpdate = 1 * fps;



canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

function frame(){
    context.clearRect(0, 0, width, height);
    playerAnimate(playerState.getState("idle"));
    skeleAnimate(skeleState.getState("skeleidle"));
    requestAnimationFrame(frame); 
}


frame();
