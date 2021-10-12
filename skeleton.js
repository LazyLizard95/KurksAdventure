const skeleSprite = new Image();
const skelexPos = 350;
const skeleyPos = 170;
const skeleFrameWidth = 32;
const skeleFrameHeight = 100;
skeleSprite.src = "Assets/Sprites/Skeleton.png"
let skeleCout = 0;
let skeleFrameIndex = 0;

var skeleton = {
    health: 20,
    power: 7,
    gold: 1,
    experience: 10

};


const skeleState = {
    states: {},
    generateState: function(name, startIndex, endIndex) {
        if (!this.states[name]) {
            this.states[name] = {
                skeleFrameIndex: startIndex,
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

skeleState.generateState("skeleidle", 0, 10);

function skeleAnimate(state){
    context.drawImage(
        skeleSprite,
        state.skeleFrameIndex * skeleFrameWidth, //first pixel x
        0, //first pixel y
        skeleFrameWidth,
        skeleFrameHeight,
        skelexPos,
        skeleyPos,
        skeleFrameWidth * 1.25,
        skeleFrameHeight * 1.25

    );
        skeleCout ++;
        if (skeleCout > 8){
            state.skeleFrameIndex ++;
            skeleCout = 0;
        }
        
        if (state.skeleFrameIndex > state.endIndex){
            state.skeleFrameIndex = state.startIndex;
        }

}

