"use strict";

let mapView = `
<div id="map" class="map">

</div>
`

let playerView = `
<div id="player" class="player"></div>
`

const init = () => {
    console.log("init")
    let root = document.querySelector("#root")
    root.innerHTML = mapView;
    window.addEventListener("keydown", e => {
        handleInput(e.key)
    }, true)
    console.log("init finished")
}

const spawnPlayer = () => {
    let map = document.querySelector("#map")
    map.innerHTML = playerView;
}

const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
}

const movePlayer = (ver, hor) => {
    const player = document.getElementById("player")
    player.style.top = `${ver}px`;
    player.style.left = `${hor}px`;
}


let verAxis = 0
let horAxis = 0
const handleInput = (key) => {

    switch (key) {
        case("s"): {
            verAxis += 10
            break;
        }
        case("w"): {
            verAxis -= 10
            break;
        }
        case("a"): {
            horAxis -= 10
            break;
        }
        case("d"): {
            horAxis += 10
            break;
        }
    }
    verAxis = clamp(verAxis, 0, 440)
    horAxis = clamp(horAxis, 0, 440)
    movePlayer(verAxis, horAxis)
}

window.addEventListener("load", () => {
    init()
    spawnPlayer();
})

