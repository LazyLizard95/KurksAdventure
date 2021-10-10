const playerSprite = new Image();
const xPos = 130;
const yPos = 160;
const frameWidth = 64;
const frameHeight = 100;
playerSprite.src = "Assets/Sprites/KurkPlaceholder.png"
let playerCount = 0;
let playerFrameIndex = 0; //used to check frame in sprite sheet

var player = {
    health: 100,
    spellPoints: 3,
    power: 10,
    gold: 10,
    stamina: 1,
    experience: 0

};


const playerState = {
    states: {},
    generateState: function(name, startIndex, endIndex) {
        if (!this.states[name]) {
            this.states[name] = {
                playerFrameIndex: startIndex,
                startIndex: startIndex,
                endIndex: endIndex
            };
        }
    },
    getState: function(name){
        if (this.states[name]) {
            return this.states[name];
        }
    }
};




playerState.generateState("testState", 6, 8);
playerState.generateState("idle", 0, 8);

function playerAnimate(state){
    context.drawImage(
        playerSprite,
        state.playerFrameIndex * frameWidth, //first pixel x
        0, //first pixel y
        frameWidth,
        frameHeight,
        xPos,
        yPos,
        frameWidth * scale,
        frameHeight * scale

    );
        playerCount ++;
        if (playerCount > 10){
            state.playerFrameIndex ++;
            playerCount = 0;
        }
        
        if (state.playerFrameIndex > state.endIndex){
            state.playerFrameIndex = state.startIndex;
        }

}

