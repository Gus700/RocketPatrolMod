/* 
Gustavo Cruz Martinez
Built on top of proffessor's Altice base tutorial code for rocket patrol
Time to complete so far: 7 hours

Changes made, following the assignment description

Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
    This was mainly acomplished but creating a new instance of the Spaceship class, with modified positioning and 
    a 50 point value. Speed was also altered to scale with the selected dificulty, the small red ship moves 
    1.5 faster than the rest

Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
    had to create new pixel art for white ships, rocket and new animation sequence for the explosion

Display the time remaining (in seconds) on the screen (10)

Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)

*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;