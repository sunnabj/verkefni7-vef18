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
  alert("Velkomin(n) í reikningshraðalinn! \n Nú koma " + GAMES_TO_PLAY + " einföld reikningsdæmi sem þú skalt svara rétt eins hratt og þú getur. Ýttu á OK til að byrja. \n Gangi þér vel!")

  do {
    play();
  }
  while (confirm("Viltu spila annan leik?"));

}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplýsingar um niðurstöður.
 *
 */
function play() {

  const start = new Date();

  let rettSvor = 0;

/**
 *  Spyrjum tíu spurninga, ef notandi ýtir á cancel er hætt. Gildið úr ask() fallinu er 1 ef svarað er rétt, 
 * en 0 ef svarað er vitlaust - svo það gildi bætist við fjölda réttra svara.
 * Notast er við var breytu til að hægt sé að nota hana utan for lykkjunnar.
*/
  for (let i = 0; i < GAMES_TO_PLAY; i++) {
    var svar = ask();
    if (svar === null) {
      break; 
    }
    rettSvor += svar;
  }
/** 
 * Sé svar === null, þ.e. notandi hefur ýtt á cancel er hætt í leik, en annars hefur for lykkjan klárast og 
 * þá er leikurinn búinn og upplýsingar um hvernig notandinn stóð sig birtast.
*/
  if (svar === null) {
    alert("Hætt í leik");
  }
  else {
    const finish = new Date();

    const finishTime = (finish -start)/1000;

    alert("Leiknum er lokið. Þú leystir " + rettSvor + " af " + GAMES_TO_PLAY + " dæmum rétt á " + finishTime.toFixed(2) + " sekúndum. \n Meðalrétt svör á sekúndu eru " + (rettSvor/finishTime).toFixed(2));
  }

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar. Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * createProblem() fallið er notað til að búa til reikningsdæmi. rightAnswer fallið er notað til að finna 
 * rétta svarið við viðkomandi dæmi. Fallið skilar svo null ef ýtt er á cancel, 1 ef notandi skrifar inn rétta tölu
 * og 0 ef notandi skrifar inn ranga tölu. 
 */
function ask() {
  const problem = createProblem();

  let actualNumber = rightAnswer(problem);

  let inputNumber = prompt("Hvað er " + problem + "?");

  if (inputNumber === null) {
    return null;
  }
  else {
    if (Number(inputNumber) === actualNumber) {
      return 1;
    }
    else {
      return 0;
    }
  }

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Hér er virki valinn af handahófi og tölur 1 og 2 fyrir dæmið sjálft valdar af handahófi samkvæmt skilyrðum
 * sem sett eru fyrir hverja reikningsaðgerð. Fallið skilar streng sem inniheldur reikningsdæmið sjálft sem 
 * birtist svo notanda í ask() fallinu.
 */
function createProblem() {
  const operators = ['/', '+', '-', '*'];
  const operator = operators[randomNumber(0, operators.length-1)];

  let number1;
  let number2;

  if (operator === '/') {
    number1 = randomNumber(2,10);
    number2 = number1*randomNumber(2,10);
  }
  else if (operator ==='*') {
    number1 = randomNumber(1,10);
    number2 = randomNumber(1,10);
  }
  else {
    number1 = randomNumber(1,100);
    number2 = randomNumber(1,100);
  }
  return number2 + operator + number1;
}

/**
 * Fallið tekur inn einfalt reikningsdæmi á strengjarformi (sem er hér búið til í createProblem()) og splittar
 * strengnum á viðkomandi virkja, tekur út tölurnar hvoru sínu megin við hann og reiknar þær saman með virkjanum.
 * Þ.e. breytir strengnum í alvöru reikningsdæmi og skilar útkomunni.
 */
function rightAnswer(problem) {

  let numbers;
  let answer;

  if (problem.includes("+")) {
    numbers = problem.split("+");
    answer = Number(numbers[0]) + Number(numbers[1]);
  }
  else if (problem.includes("-")) {
    numbers = problem.split("-");
    answer = Number(numbers[0]) - Number(numbers[1]);
  }
  else if (problem.includes("*")) {
    numbers = problem.split("*");
    answer = Number(numbers[0]) * Number(numbers[1]);
  }
  else if (problem.includes("/")) {
    numbers = problem.split("/");
    answer = Number(numbers[0]) / Number(numbers[1]);
  }
  return answer;
}

// Byrjar leik
start();
