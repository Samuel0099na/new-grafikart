// todo---------------------------LES BOUCLES----------------------------------------
// ? Dans ce nouveau chapitre nous allons voir les boucles
// ? les boucles permet de repeter une certaines dlogiques suivant une condition precise.
// ? Les boucles permettent de répéter des actions simplement et rapidement.
// ? Une boucle peut être vue comme une version informatique de « copier N lignes » ou de « faire X fois quelque chose ».
// ? Par exemple, en JavaScript, on pourrait traduire « Faire 5 pas vers l'est » avec cette boucle :
for (let pas = 0; pas < 5; pas++) {
  //! Ceci sera exécuté 5 fois
  //! À chaque éxécution, la variable "pas" augmentera de 1
  //! Lorsque'elle sera arrivée à 5, le boucle se terminera.
  //! console.log("Faire " + pas + " pas vers l'est");
}
//?il existe plusieures facon de creer des boucles
//?telque:=>

/*//!LA BOUCLE WHILE:
    //?la boucle while permet d'exsecuter un code tant que la condition passee soit verifie
    */
//todo:EXEMPLE==>
// while(//?condition){
//?instruction
// }
//! ?FAUT fiare attention avec l'utilisation de cette boucle a cete boucle a ce que conditiondevienne
//! ?fausse a un moment donne au risque de voir la boucle se derouler de manniere infinie

//todo:EX==>
let ss = 0;
while (ss < 3) {
  console.log("je compte " + ss);
  ss++;
}
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//!LAA BOUCLE FOR
//?Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.
//?La boucle for JavaScript ressemble beaucoup à celle utilisée en C ou en Java. Une boucle for s'utilise de la façon suivante :
//todo:exemple=>
for (let i = 0; i > 10; i++) {
  console.log("helloo");
  //cette boucle la permet d'afficher helloo, puis sur la 10eme fois la boucle est se termines
}
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//!LA BOUCLE FOR IN
//?la boucle for in permet d'itterer sur des cle d'un objet ou les cles d'un tableau

const uneObjet = {
  name: "samuel",
  age: 22,
  ecole: "college beurd",
};
for (let ka in uneObjet) {
  console.log(uneObjet[ka]);
  console.log(ka);
  //todo=> si je veux obtenir les cles de mon objet je dois loger la variable cree dans la boucle
  //todo=> mais si je veux obtenir la valeur de mes cle je dois loger mon objet  + la variable cree a l'interieur d;un crochet
}
//en gros cette boucle me permet permet d'itérer sur l'ensemble des propriétés énumérables de mon objet
//todo:exemple pour un tableau avec le for in=.
const uneAutreTbleau = [12, `a l'\infinie`, 23, "samy"];
for (let zz in uneAutreTbleau) {
  console.log(zz);
  console.log(uneAutreTbleau[zz]);
  //alors dans l'exemple si-dessus je log[zz] pour voir l'index du tableau
}
const uneAutreTbleaux = [12, "mon ami", 22, "je suis samuel naphard"];
for (let k in uneAutreTbleaux) {
  console.log(uneAutreTbleaux[k]);
  //dans cet exemple pour avoir les valeurs du tableau je log le tableau + la variable cree a l'interieur de la boucle
  //=>:(uneAutreTbleau[zz])
}
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

//!LA BOUCLE FOR Of
//?la boucle for of, elle permet de créer une boucle qui fonctionne
//?  avec les objets itérables (qui incluent Array, Map, Set, l'objet arguments, etc.).
//?et une autre point important c'est que la boucle (for of )ne marches pas sur les objets
//todo:exemple=>
const unTablau = [23, 23, 87, "samuel"];
for (let pa of unTablau) {
  console.log(unTablau);
  console.log(pa);
}
let strings = "bonjour";
for (letter of strings) {
  console.log(letter);
  console.table(strings);
}

//!------------------------------------------------------------------------------------------------
//manipulation de la boucle for in sur un tableau
const arrai = [12, 25, 37, 9];
for (let k in arrai) {
  console.log(arrai[k]);
}
//----------------------------------------------------------------------------------
const monchat = {
  race: "ciamois",
  nom: "mimi",
  age: 3,
};
console.table(monchat);
for (let ok in monchat) {
  console.log(monchat);
}

let clients = ["samuel", "louby", "alens"];
console.table(clients);
for (let vary of clients) {
  console.log(vary);
}
for (varr in clients) {
  console.log(clients[varr]);
}

// pour voir les valeur et le index a la fois
clients.forEach((varr, index, Array) => {
  console.log(varr, index, Array);
});

//todo=> EXO

const deviner = 10;
let chiffre;

while (chiffre != deviner) {
  chiffre = prompt("tu dois deviner un dhiffre pour entrer");
  if (chiffre > deviner) {
    console.log("tu dois entrer moins de chiffre pour trouver le nombre ");
  } else if (chiffre < deviner) {
    console.log("tu dois entrer plus de chiffre pour trouver le nombre ");
  } else {
    console.log("genial tu l'as devine");
  }
}

// et on pourait le faifre d'une autre facon avec moin de code
const devine = 7;
let num;

while (num !== devine) {
  num = prompt("entrer le chiffre pour deviner") * 1;
  if (num !== devine) {
    console.log("domage!");
  }
}
console.log("bravo tu l'as devinnee");
// --------------------------------------------------------------------------------------------
// EXO DE RENTRER UN CHIFFRE EN 1 ET 10
let vava = prompt("entrer un nombre ");
if (vava < 0 || vava > 10) {
  console.log("ce cifffre a n'est pas entre 1 et 10");
} else {
  for (let n = vava; n < 0; n--) {
    console.log(n);
  }
}
// on peut faire cette exercice avec une boucle while aussi et ca aurait donne cela
let number = prompt("entrer un chifre qui est entre  1 et 10");
if (number < 0 || number < 10) {
  console.log("cette number n'est pas entre 1 et 10 ");
} else {
  while (number >= 0) {
    console.log("oui cette number est entre 1 et 10");
    number--;
  }
}
