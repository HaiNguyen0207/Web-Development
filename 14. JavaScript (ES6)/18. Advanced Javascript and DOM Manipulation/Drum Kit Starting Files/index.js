

for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click", handleClick);
}


function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
function newAudio(path) {
    var audio = new Audio(path);
    audio.play();
}
function makeSound(key) {
    switch (key) {
        case 'w':
            newAudio("sounds/tom-1.mp3");
            break;
        case 'a':
            newAudio("sounds/tom-2.mp3");
            break;
        case 's':
            newAudio("sounds/tom-3.mp3");
            break;

        case 'd':
            newAudio("sounds/tom-4.mp3");
            break;
        case 'j':
            newAudio("sounds/crash.mp3");
            break;
        case 'k':
            newAudio("sounds/kick-bass.mp3");
            break;
        case 'l':
            newAudio("sounds/snare.mp3");
            break;

            break;
        default:
            break;

    }
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

})

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 0.1);
}