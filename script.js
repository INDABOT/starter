'use strict';

 /// 


 // console.log(dice);

// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice +' </em>'; 
// document.querySelector('#current--' + activePlayer).textContent = dice; 

// var x = document.querySelector('#score--0').textContent;
// console.log( x);
 
//changed the scores to 0

var scores, roundScore, activePlayer, gamePlaying;
 
init();

document.querySelector('.btn--roll').addEventListener('click',function  (){
    if (gamePlaying){
    //1. random number

    var dice  = Math.floor(Math.random() * 6) +1;
    
    //2. display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice +  '.png';

    //3.update only if the rolled number was not a 1
    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current--' +  activePlayer).textContent = roundScore;


        }else{
        //next player
       nextPlayer();

     }

    }
   

});

document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        //add the cuurrent score to the global score 
 scores[activePlayer] += roundScore

 //update the ui
 document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

 //check if player won the game
 if(scores[activePlayer] >= 20){
     document.querySelector('#name--' + activePlayer).textContent = 'Winner!!!';
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.player--' + activePlayer).classList.add('.player--winner');
     document.querySelector('.player--' + activePlayer).classList.remove('.player--winner');
     gamePlaying = true;
 }else{
 //nextPlayer
 nextPlayer();

 }
    }
});


function nextPlayer (){
    //next player
    activePlayer === 0 ? activePlayer =1 : activePlayer =0; 
        roundScore = 0;


        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');


        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

function init (){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('name--0').textContent = 'Player 1';
document.getElementById('name--1').textContent = 'Player 2';
document.querySelector('.player--0').classList.remove('.player--winner');
document.querySelector('.player--1').classList.remove('.player--winner');
document.querySelector('.player--0').classList.remove('.player--active');
document.querySelector('.player--1').classList.remove('.player--active');
document.querySelector('.player--0').classList.add('.player--active');
}







