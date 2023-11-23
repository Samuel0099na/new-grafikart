a == b; // a égale à b
a === b; // a == b et a est de même "type" que b
a >= b; // a supérieur OU égal à b
a > b; // a strictement supérieur à b
a <= b; // a inférieur OU égal à b
a < b; // a strictement inférieur à b
a != b; // a est différent de b
a !== b; // a est strictement différent de b

// && ET
// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false

// || OU
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// ! NON
!true; // false
!false; // true

//:ici on fait une comparaison
const age = prompt("quelle age as tu ?");
if (age <= 13) {
  console.log("tu ne peut regarder qu'u film pour enfant");
} else if (age > 13 && age <= 18) {
  console.log("tu peut jouer a un jeu video");
} else {
  console.log("tu peut regarder un film pour adulte");
}
//-----------------------------------------------------------------------------------------------------------
//on peut la faire une autre facon
const year = 2023;
const birthyear = prompt("tu es nee dans quelle anne ?");
const age2 = year - birthyear;

if (age2 <= 13) {
  console.log("tu ne peut regarder qu'u film pour enfant");
} else if (age2 > 13 && age2 <= 18) {
  console.log("tu peut jouer a un jeu video");
} else {
  console.log("tu peut regarder un film pour adulte");
}
// /*----------------les conditions avec switch--------------*/
switch (expression) {
  case valeur1:
    /*Instructions à exécuter lorsque le résultat
    de l'expression correspond à valeur1
    instructions1;*/
    break;
  case valeur2:
    /*Instructions à exécuter lorsque le résultat
    de l'expression correspond à valeur2*/
    break;
  default:
    /*Instructions à exécuter lorsqu'aucune des valeurs
    ne correspond*/
    break;
}
/*---for exemple---*/
const number = 20;
const pays = "us";

switch (pays) {
  case fr:
    console.log("je suis en france");
    break;
  case us:
    console.log("je suis aux etats unis");
    break;
  default:
    console.log("je suis ailleur");
    break;
}

// /*---les condition if else avec des function-------*/
function verifierValeur(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a vaut 1 et b vaut 2");
    }
  } else {
    console.log("a ne vaut pas 1");
  }
}

/*----for exemple---*/
function additioner(y, x) {
  if (y === 1) {
    if (x === 2) {
      console.log("oui y egale a 1 et x egale a 2");
    }
  } else {
    console.log("non ils sont pas egaux");
  }
}

//todo /*pour faire une entre deux age dans une condition */

let age3 = prompt("vous avez quelle age ?");

if (age3 >= 13 && age3 < 18) {
  console.log("ici c'est un exemple de entre l'age de 13 ans et de 18 ans ");
} else if ((age3 = 19)) {
  console.log("ok pas de probleme");
}

//todo /* exemple de la condition des us et de fr */
const pays2 = "US";
const age4 = 17;
const conduireAuxUS = `pays2 === "us" && age4 ===17`;
const conduireEnFR = `pays2 === "fr " && age4 === 18`;
if (conduireAuxUS) {
  console.log("tu as le droit de conduire aux etats unis");
} else if (conduireEnFR) {
  console.log("tu as le de conduire en france ");
} else {
  console.log("tu n'as pas le droit de conduire ");
}

/* l'exemple de multiplication dans un prompt*/
const a = prompt("entrer un chiffre");
const b = prompt("entrer un second  chiffre");
const result = "a*b";

if (result > 0) {
  console.log(`${a} x ${b} = ${result} est positif`);
} else {
  console.log(`${a} x ${b} = ${result}est negatif`);
}

// /* et je pourrais le mettre dans cette facon aussi qui est bien plus lisible
// et faire en sorte que si on tape de n'importe quoi il affiche
// le cinsole.log("operation impossible")*/
const pop1 = prompt("entrer une cgiffre");
const pop = prompt("entrer une autre chiffre ");
const resultat = "pop1*pop";
let signe;

if (NaN(resultat)) {
  console.log(`operation impossible ${a}x${b}`);
} else {
  if (resultat > 0) {
    signe = "est positif";
  } else {
    signe = "est negatif";
  }
  console.log(`${a}x${b} = ${resultat} est ${signe}`);
}

//todo--la portee des variables

//? si par exemple j'ai

let momo = 12;
if (momo >= 0) {
  let sufix = "string";
}

/*pour faire appel a sufix je dois l'appler qu'a l'interieur de la fonction momo
 sinon elle sera undefined
  autre point important dans ce cas si vous cree une variable qui n'as pas de let ou de const
il  va l'appler avec la surfix (var)*/
// --------------------------------------------------------------------------------
// une variable peut reutiliser
//!  exemple
let mama = 13;
let xoxo = 90;
if (mama >= 0) {
  xoxo = 22;
  console.log(
    "xoxo"
    // xoxo searai 22 par ce que je l'ai changee dans  ma condition
  );
}
//  mais si je */
console.log("xoxo");

//  il sera toujours 90 par ce que la modification de 22 ne compte qu'a l'interieur de ma
