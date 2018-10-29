/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {

    do {
        createProblem();
    } while (confirm('play again?'));


    eða
    let svar;
    do {
        let problem = createProblem();
        let svar = prompt('What is ' + problem.spurning + '?');
        if (parseInt(svar) === problem.svar) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    } while (confirm('play again?'));
    //Skoðum þrjá mismunandi pop-up hluti.
  alert('Halló, velkomin í frábæra mælileikinn! \n Ýttu á ok til að byrja');
  //Kóði hér fyrir neðan keyrist ekkert nema við ýtum á ok í glugga.
  /*
  let doesAgree = confirm('Do you agree?'); //verður true ef ýtt á ok, false ef ýtt á cancel
  console.log(doesAgree); //þetta prentast út á console sem maður fær með inspect.
  */
  let nafn = prompt('Hvað heitir þú?');
  alert('Hello ' + nafn);
  //play(); //Mikilvægt að kalla á play hér
  const started = new Date();
  do {
   play();
  } while (confirm('Play again?'));

  const finished = new Date();

  alert('You played for ' + (finished-started)/1000 + 'seconds');
}

function play() {
    const start = new Date();
    let jonString;
    const nafn = prompt('What is your name?');

    if (nafn==='Jon') {
        jonString = 'OMG! Your name is Jon!';
    } else {
        jonString = 'Your name is not Jon';
    }
//Útfærum fall sem býr til reikningsspurningu og stingur inn í promptið. Þurfum líka fall sem ber saman það sem 
//kemur inn og rétta útkomu

    const finish = new Date();
    const finishTime = (finish-start)/1000;
    alert('it took you ' + finishTime + ' seconds to write your name ' + nafn + jonString);

    /*Hægt að nota afturábak kommu fyrir strengi og þá er auðvelt að setja inn breytur eða reikniaðgerðir til að losna
     við plúsa. 'it took you ${finishTime.toFixed(1)} seconds to write your name ${nafn}'*/
    //toFixed(n) setur n aukastafi.

    /*randomNumber(1,10); //Fáum random tölu frá 1 upp í 10*/
}

function createProblem() {
    const operators = ['svangur', 'threyttur', 'gladur'];

    const operators = ['/', '+', '-', '*']; //Þarf backslash á slash eða slash á slash eða what?

    const whatNow = operators[randomNumber(0, operators.length-1)];

    switch (whatNow) {
        case 'svangur':
            const matur = prompt('Hvad aetti hann ad borda?');
            alert('Jon eats ' + matur);
            break;
        case 'threyttur':
            alert('Jon should go to bed');
            break;
        case 'gladur':
            alert('It is good to be happy')
            break;
        default:
            break;
    }
}

const rettSvar = 22;
let spurning = '2 + 20';

let spurningHlutur = {
    svar: rettSvar,
    spurning: spurning
}

return spurningHlutur;

function ask() {
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
