function controller(event) {

    if (event.key == "Enter") {
        if (runWorker == 0) {
            run();
            runSound.play();
            updatescore();
            backgroundMove();
            flameMarginLeft.forEach(createFlame);

        }

    }




    if (event.key == " ") {
        if (jumpWorker == 0) {
            if (runWorker != 0) {

                clearInterval(runWorker);
                runSound.pause();
                jump();
                jumpSound.play();

            }
        }
    }
}
var runImage = 1;
var runWorker = 0;
var runSound = new Audio("run.mp3");
runSound.loop = true;
function run() {
    runWorker = setInterval(() => {

        runImage = runImage + 1;

        if (runImage == 9) {
            runImage = 1;

        }

        document.getElementById("boy").src = "run" + runImage + ".png";

    }, 120);

}


var jumpImage = 1;
var jumpWorker = 0;
var jumpMarginTop = 297;
var jumpSound = new Audio("jump.mp3");
function jump() {
    jumpWorker = setInterval(() => {
        if (jumpImage == 13) {
            jumpImage = 1;
            clearInterval(jumpWorker);
            run();
            runSound.play();
            jumpWorker = 0;
        }
        jumpImage = jumpImage + 1;

        if (jumpImage < 8) {
            jumpMarginTop = jumpMarginTop - 20;
            document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
        }
        if (jumpImage > 7) {
            jumpMarginTop = jumpMarginTop + 20;
            document.getElementById("boy").style.marginTop = jumpMarginTop + "px";
        }

        if (jumpImage == 13) {

            jumpImage = 1;
            clearInterval(jumpWorker);
            run();
            runSound.play();
            jumpWorker = 0;
        }

        document.getElementById("boy").src = "jump" + jumpImage + ".png";
    }, 100);


}
var score = 0;
var scoreWorker = 0;
function updatescore() {
    scoreWorker = setInterval(() => {
        score = score + 10;
        if (score == 1010) {
            alert("you win!")

            window.location.reload();
        }
        document.getElementById("score").innerHTML = score;


    }, 300);

}
var backgroundX = 0;
var backgroundWorke = 0;
function backgroundMove() {
    backgroundWorke = setInterval(() => {
        backgroundX = backgroundX - 10;

        document.getElementById("background").style.backgroundPositionX = backgroundX + "px";
    }, 70);

}
var deadImage = 1;
var deadWorker = 0;
var deadSound = new Audio("dead.mp3");

function dead() {

    deadWorker = setInterval(() => {

        deadImage = deadImage + 1;
        if (deadImage == 11) {
            deadImage = 1;
            clearInterval(deadWorker);
            alert("games over");
            window.location.reload();
        }
        document.getElementById("boy").src = "dead" + deadImage + ".png";
    }, 100);
}

var flameMarginLeft = [900, 1000, 1500, 2000, 2500,
    3000, 3500, 4000, 4500,
    5000, 5500, 6000, 6500,
    7000, 7500, 8000, 8500,
    9000, 9500, 10000];
var flameWorker = 0;
function createFlame(x) {
    var f = document.createElement("img");// f= <img/>
    f.src = "flame.gif";//<img src="flame.glf"/>
    f.className = "flame";// f = <img src="flame.glf" class="flame"/>
    f.style.marginLeft = x + "px";
    document.getElementById("background").appendChild(f);

    flameWorker = setInterval(() => {

        if (flameWorker != 0) {
            x = x - 20;
            f.style.marginLeft = x + "px";
        }


        if (x == 80) {
            if (jumpWorker == 0) {
                clearInterval(runWorker);
                clearInterval(scoreWorker);
                clearInterval(backgroundWorke);
                clearInterval(flameWorker);
                flameWorker = 0;
                dead();
                deadSound.play();

            }
        }

    }, 70);
}
function button() {

}