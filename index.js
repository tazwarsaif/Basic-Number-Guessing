const btn = document.getElementById("btn");
const inp = document.getElementById("inp");

const ans = document.getElementById("ans");

const max = 100;
const min = 1;
const random = Math.floor(Math.random()*(max-min)) + min;

let attempt = 0;
let guess;


function check(num,att){
    if(num>random){
        ans.textContent = "Too High!";
    }
    else if(num<random){
        ans.textContent = "Too Low!";
    }
    else{
        ans.textContent = `Correct! You took ${att}. Reload!`
    }
}


btn.onclick = function(){
    attempt++
    guess = inp.value;
    guess = Number(guess);
    check(guess,attempt);
    console.log(guess);
}
