let countElh = document.getElementById("home-score");
let countElg = document.getElementById("guest-score");
let counth = 0;
let countg = 0

function increaseHomeScoreOne() {
    counth += 1;
    countElh.textContent = counth;
}

function increaseHomeScoretwo() {
    counth += 2;
    countElh.textContent = counth;
}

function increaseHomeScorethree() {
    counth += 3;
    countElh.textContent = counth;
} 

function increaseGuestScoreone() {
    countg += 1;
    countElg.textContent = countg;
}

function increaseGuestScoretwo() {
    countg += 2;
    countElg.textContent = countg;
}

function increaseGuestScorethree() {
    countg += 3;
    countElg.textContent = countg;
}