const btn = document.querySelector('.btn');
const text = document.querySelector('header>h1');
const root = document.querySelector(":root");
const face = document.querySelector(".face");
const prize = document.querySelector(".prize");

let message;
let pos;
let jumpX;
let jumpY;
let clicks = 0;
let scale = 1;

let animation;

let w;
let h;

/*Face function*/
function faceAppear() {
    face.classList.add('appear');
    setTimeout(function() {
        face.classList.remove('appear');
    }, 1000);
}

function prizeAppear() {
    prize.classList.add('appear');
}

/*Random range*/
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/*Random range with step*/
function randomStep(min, max, step) {
    min = Math.ceil(min);
    max = Math.floor(max);
    step = step;
    return Math.floor(Math.random() * (max - min) / step) * step + min;
}

// window.addEventListener("orientationchange", function(event) {
//   console.log(event);
// });

/*Main click the button function*/
btn.addEventListener('click', function(event) {
    clicks += 1;
    w = window.innerWidth;
    h = window.innerHeight;
    pos = btn.getBoundingClientRect();

    /*randomize position*/
    jumpX = random(50, w - 80);
    jumpY = random(50, h - 200);
    // console.log(jumpX - pos.x);
    // console.log(jumpX, pos.x);

    if(Math.abs(jumpX - pos.x) < 50) {
        btn.style.left = 30 + 'px';
        btn.style.top = 30 + 'px';
    }
    else {
        btn.style.left = jumpX + 'px';
        btn.style.top = jumpY + 'px';
    }
    

    /*change text with each click*/
    if(clicks == 1) {
        text.innerText = 'Missed, Try Again!';
        textGrow(text);
    }
    else if(clicks==2) {text.innerText = "Ha-Ha! Missed! Another try?"; textGrow(text);}
    else if(clicks==3) {text.innerText = "Come on! What's wrong with you?"; textGrow(text);}
    else if(clicks==4) {text.innerText = "Just press this stupid button!"; textGrow(text);}
    else if(clicks==5) {text.innerText = "That's getting boring."; textGrow(text);}
    else if(clicks==6) {text.innerText = "I'm still waiting."; textGrow(text);}
    else if(clicks==7) {

        /*button growing function*/
        function repeatOften() {
            scale += 1 / 150;
            btn.style.transform = 'scale(' + scale + ')';
            animation = requestAnimationFrame(repeatOften);
        }
        requestAnimationFrame(repeatOften);
        btn.style.left = w/2 + 'px';
        btn.style.top = h/2 + 'px';
        root.style.setProperty("--bd-color", '#ff1e23');
        root.style.setProperty("--animation-dur", '0.8s');
        btn.style.backgroundColor = '#ff1e23';
        text.innerText = "Look, you pissed the button off!";
        textGrow(text);
    }
    else if(clicks==8) {
        cancelAnimationFrame(animation);
        btn.style.transform = 'scale(1)';
        btn.style.left = 100 + 'px';
        btn.style.top = 100 + 'px';
        root.style.setProperty("--bd-color", '#006cff');
        root.style.setProperty("--animation-dur", '1.5s');
        btn.style.backgroundColor = '#006cff';
        text.innerText = "I'm just kidding. Press it )";
        textGrow(text);
    }
    else if(clicks==9) {text.innerText = "OK, one more time and that's it."; textGrow(text);}
    else if(clicks==10) {text.innerText = "Nope! We're going to do that forever."; textGrow(text);}
    else if(clicks==11) {text.innerText = "I promise, that's the last time."; textGrow(text);}
    else if(clicks==12) {
        faceAppear();
        text.innerText = "Jeez! I almost shit my pants! What was that?";
        textGrow(text);
    }
    else if(clicks==13) {text.innerText = "Button is still waitng."; textGrow(text);}
    else if(clicks==14) {text.innerText = "I'm tired. Maybe we should end this?"; textGrow(text);}
    else if(clicks==15) {text.innerText = "Yes, you won! Press again to get your prize!"; textGrow(text);}
    else if(clicks==16) {prizeAppear();}
});


function textGrow(item) {
    let size = 0;
    let int = setInterval(frame, 20);
    function frame() {
        if(size == 10) {
            clearInterval(int);
        }
        else {
            size += 1;
            item.style.transform = 'scaleY('+ size / 10 +')';
        }
    }
}

