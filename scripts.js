// Write your JavaScript code here.
// Remember to pay attention to page loading!





window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const down = document.getElementById("down");
    const up = document.getElementById("up");
    const rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.bottom = 0;
    rocket.style.left = 0;
    
    takeOff.addEventListener('click', event => {
        let answer = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if (answer === true) {
            status.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    landing.addEventListener('click', event => {
        this.window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    })

    abort.addEventListener('click', event => {
        let answer = window.confirm('Confirm you want to abort the mission.')
        if (answer === true) {
            status.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }    
    })

    up.addEventListener('click', event => {
        let up = parseInt(rocket.style.bottom) + 10;
         rocket.style.bottom =  up + "px";
    })

    down.addEventListener('click', event => {
        let down = parseInt(rocket.style.bottom) - 10;
         rocket.style.bottom =  down + "px";
    })

    left.addEventListener('click', event => {
        let left = parseInt(rocket.style.left) + 10;
        rocket.style.left =  left + "px"; 
    })

    right.addEventListener('click', event => {
        let right = parseInt(rocket.style.left) - 10; 
         rocket.style.left =  right + "px"; 
    })

} )