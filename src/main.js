/* 
Gustavo Cruz Martinez
Built on top of proffessor's Altice base tutorial code for rocket patrol
Time to complete so far: 15 hours

Changes made, following the assignment description

Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20 points)
    This was mainly acomplished but creating a new instance of the Spaceship class, with modified positioning and 
    a 50 point value. Speed was also altered to scale with the selected dificulty, the small red ship moves 
    1.75 times faster than the rest

Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20 points)
    had to create new pixel art for white ships, rocket and new animation sequence for the explosion

Display the time remaining (in seconds) on the screen (10 points)
    used the documentation below on the timer object in phaser
    https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/
    this let me access the amount of time that was left on the clock and update it on screen

Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20 points)
    To do this I had to modify the spaceship class to also accept an additional parameter "addTime"
    This stores the amount of time that a spaceship awards the player if they successfully hit it
    with this value I was able to update the delay of the clock that keeps track of time
    Since the displayed timer at the top of the screen is tied to this delay, it correctly updates the time given by
    the corresponding ship. Gameplay also lasts realtive to the time displayed on screen

Implement mouse control for player movement and mouse click to fire (20 points)
    https://newdocs.phaser.io/docs/3.55.2/Phaser.Input.Pointer#button
    By far this is the one that I am taking the longest to research on a find out how to the cordinates for my mouse.
    I learned how to use activePointers, things like tracking their position, tracking if the pointer/cursor is in movement
    and when it is stationary so that players can use arrow keys instead, how to tell when a mouse button is being pressed 
    and applying that so that the rocket is fired upwards


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
// reserve mouse variable
let mouseIn