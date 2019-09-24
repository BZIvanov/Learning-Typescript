; function draw(n) {
    let canvas = document.getElementById("field");
    let ctx = canvas.getContext('2d');
    let isDone = isWordCompleted(targets.maskedWord);
    
    if (!isDone) {
        drawOnCanvas(n, ctx);
    } else {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.font = "32px Righteous";
            ctx.fillStyle = "#ffffff"; 
            ctx.fillText("You Win", 105, 130);
    }
}


/**
 * This function will check if all the letters were guessed correctly by the user.
 * @param {string[]} mask This is the Array of strings where letters still undescovered by the user will equal to '-'
 * @return {boolean} The function will return true if the user have guessed correctly all the hidden letters.
 */
function isWordCompleted(mask) {
    let isCompleted = true;
    for (let m of mask) {
        if (m === "-") {
            isCompleted = false;
            break;
        }
    }
    return isCompleted;
}

/**
 * This function will draw lines on circles on the canvas depending on counter of wrong attempts by the user.
 * @param {number} n The number of wrong attempts starting from 1 to 10 when the game is expected to ends.
 * @param {object} ctx The context object which is required to provide the methods we need to use to draw on the canvas.
 * @return {void} The result will be canvas object such as line, rectangle or circle drawn on the canvas object.
 */
function drawOnCanvas(n, ctx) {
    let canvasObjects = {
        1: (ctx) => {
            ctx.strokeStyle = "#FFFFFF";
            ctx.strokeRect(55, 220, 175, 0);
        },
        2: (ctx) => {
            ctx.strokeRect(60, 50, 1, 170);
        },
        3: (ctx) => {
            ctx.strokeRect(55, 55, 125, 0);
        },
        4: (ctx) => {
            ctx.strokeRect(125, 55, 0, 15);
        },
        5: (ctx) => {
            ctx.strokeStyle = "#dc3545";
            ctx.beginPath();
            ctx.arc(125, 80, 10, 0, 2 * Math.PI);
            ctx.stroke();
        },
        6: (ctx) => {
            ctx.strokeRect(125, 90, 0, 50);
        },
        7: (ctx) => {
            ctx.beginPath();
            ctx.moveTo(100, 110);
            ctx.lineTo(125, 100);
            ctx.stroke();
        },
        8: (ctx) => {
            ctx.beginPath();
            ctx.moveTo(125, 100);
            ctx.lineTo(150, 110);
            ctx.stroke();
        },
        9: (ctx) => {
            ctx.beginPath();
            ctx.moveTo(100, 150);
            ctx.lineTo(125, 140);
            ctx.stroke();
        },
        10: function (ctx) {
            ctx.clearRect(0, 0, 350, 250);
            ctx.font = "32px Righteous";
            ctx.fillStyle = "#ffffff"; 
            ctx.fillText("Game Over", 85, 130);
    
            let el = document.getElementById('maskedWord');
            all = el.getElementsByTagName('input');
            for (let i = 0; i < all.length; i++) {
                all[i].disabled = true;
            }
        }
    }
    
    return canvasObjects[n](ctx);
};
