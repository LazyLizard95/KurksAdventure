const buffer = document.getElementById("canvas");
const context = canvas.getContext("2d");
const userInput = document.querySelector(".battle");
const width = canvas.width = 600;
const height = canvas.height = 600;
const scale = 1;
let counter = 35;


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




function battle(){
    //console.log("Counter: " + counter);
    context.clearRect(0, 0, width, height);
    playerAnimate(playerState.getState("idle"));
    skeleAnimate(skeleState.getState("skeleidle"));
    if(player.health && skeleton.health > 0){
    let damageCountdown = setTimeout(startDamage, 5500);
        
        function startDamage(){
            counter--;
            if(counter === 0 && skeleton.health > 0){
            for(i = 0; i < 1;){
                player.health = player.health - skeleton.power;
                console.log(player.health);
                counter = 100;
                i++;
            } 
        clearTimeout(damageCountdown);
            
        }
            return damageCountdown;
        }
    }
    
    
    if(skeleton.health == 0){
        player.experience = player.experience + skeleton.experience;
        player.gold = player.gold + skeleton.gold;
        console.log("Skeleton has died" + skeleton.health);
    }
    requestAnimationFrame(battle); 
}


battle();

//  TODO: Top down overworld / state machine. 
//  Random amount of damage dealt and taken within a given value.
//  Animation on attack player & enemy.
//  Animation on death player & enemy.
//  Basic sound effects.
//  Add strong spells, that cannot be used one after the other. 
