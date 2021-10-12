const buffer = document.getElementById("canvas");
const context = canvas.getContext("2d");
const userInput = document.querySelector(".battle");
const width = canvas.width = 600;
const height = canvas.height = 600;
const scale = 1;



var possibleEnemies = [skeleton];



canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";






userInput.addEventListener('keyup', (event) =>{

    if (event.key == 'Enter'){
        if(userInput.value == "Fyra"){
            console.log("Zaa! FIRE");
            event.currentTarget.value = "";
            skeleton.health = skeleton.health - player.power;
            console.log(skeleton.health);
        }
    }
});  


let intervalID; 
function damage(){
    if (!intervalID){
    intervalID = setInterval(startDamage, 5000);
        
}
}
function startDamage(){
    if(skeleton.health > 0){
        player.health = player.health - skeleton.power;
    }

}

function stopDamage(){
    clearInterval(intervalID);
}


function battle(){
    
    context.clearRect(0, 0, width, height);
    playerAnimate(playerState.getState("idle"));
    skeleAnimate(skeleState.getState("skeleidle"));
   
    while (skeleton.health > 0){
    
    damage();
    
      
    console.log(player.health);
    }    
    
    if(skeleton.health == 0){
        player.experience = player.experience + skeleton.experience;
        player.gold = player.gold + skeleton.gold;
        console.log("Skeleton has died" + skeleton.health);
    }
    requestAnimationFrame(battle); 
}










battle();
