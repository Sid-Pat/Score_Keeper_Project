const tune  = new Audio("Music/10 Shop.mp3");
// tune.play();
const pl = document.getElementById('play');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p1Sc = document.querySelector('#p1Sc');
const p2Sc = document.querySelector('#p2Sc');
const reset = document.querySelector('#rest');

let bp = true;
pl.addEventListener('click',function(){
    if(Boolean(bp)==true){
        // tune.play();
        setTimeout(tune.play(),2000);

        bp=false;
    }
    else{
        tune.pause();
        bp=true;
    }
})

const wnSc = document.querySelector('#winSc');
let winningScore = 3;
wnSc.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    resetF();
})
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
p1.addEventListener('click',function(){
    let x = Math.floor(Math.random()*3);
    p1Sc.innerText=Number(p1Sc.innerText)+x;
    audio.play();
    if(p1Sc.innerText>=winningScore){
        const wtune  = new Audio("Music/09 Small Item Catch.mp3");
        wtune.play();
        // p1.style.backgroundColor = 'lawngreen';
        p1Sc.classList.add('winner');
        p2Sc.classList.add('loser');
        p1.innerText='P1 Wins';
        // p2.style.backgroundColor = 'red';
        p2.innerText='P2 Lost';

        p1.disabled=true;
        p2.disabled=true;
        if(bp==false){
            tune.pause();
            setTimeout(tune.play(),2000);
        }
    }
})

p2.addEventListener('click',function(){
    let x = Math.floor(Math.random()*3);
    p2Sc.innerText=Number(p2Sc.innerText)+x;
    audio.play();
    if(p2Sc.innerText>=winningScore){
        const wtune  = new Audio("Music/09 Small Item Catch.mp3");
        wtune.play();
        // p2.innerHTML+=`padding: 1.2em 4em; border-radius: 10px;`;
        p2.innerText='P2 Wins';
        // p1.style.backgroundColor = 'red';
        p1.innerText='P1 Lost';
        p2Sc.classList.add('winner');
        p1Sc.classList.add('loser');
        p1.disabled=true;
        p2.disabled=true;
        if(bp==false){
            tune.pause();
            setTimeout(tune.play(),2000);
        }
    }
})

reset.addEventListener('click',resetF)

function resetF(){
    p1.disabled=false;
    p2.disabled=false;
    // setTimeout('location.reload();',1000);
    p1.innerText='Player 1';
    p2.innerText='Player 2';
    p1Sc.innerText = '0';
    p2Sc.innerText = '0';
    p1Sc.classList.remove('winner','loser');
    p2Sc.classList.remove('loser','winner');
    // tune.pause();
    // const tune  = new Audio("Music/10 Shop.mp3");
    audio.play();
}

