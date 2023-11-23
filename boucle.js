// todo---------------------------LES BOUCLES----------------------------------------
// ? Dans ce nouveau chapitre nous allons voir les boucles
// ? les boucles permet de repeter une certaines dlogiques suivant une condition precise.
// ? Les boucles permettent de répéter des actions simplement et rapidement.
// ? Une boucle peut être vue comme une version informatique de « copier N lignes » ou de « faire X fois quelque chose ».
// ? Par exemple, en JavaScript, on pourrait traduire « Faire 5 pas vers l'est » avec cette boucle :
for (let pas = 0; pas < 5; pas++) {
  //todo Ceci sera exécuté 5 fois
  //todo À chaque éxécution, la variable "pas" augmentera de 1
  //todo Lorsque'elle sera arrivée à 5, le boucle se terminera.
  //todo console.log("Faire " + pas + " pas vers l'est");
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
//?Une boucle for répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée.k b
//?La boucle for JavaScript ressemble beaucoup à celle utilisée en C ou en Java. Une boucle for s'utilise de la façon suivante :
//todo:exemple=>
for (let i = 0; i > 10; i++) {
  console.log("helloo");
  //cette boucle la permet d'afficher helloo, puis sur la 10eme fois la boucle est terminee
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
  //todo=> mais si je veux obtenir la valeur de mes cle je dois loger mon objet  + la variable cree a l'interieur d'un crochet
}
//en gros cette boucle me permet permet d'itérer sur l'ensemble des propriétés énumérables de mon objet
//todo:exemple pour un tableau avec le for in=.
const uneAutreTbleau = [12, `a l'\infinie`, 23, "samy"];
for (let zz in uneAutreTbleau) {
  console.log(zz);
  console.log(uneAutreTbleau[zz]);
  //alors dans l'exemple si-dessus je log[zz] pour voir l'index du tableau
  // et pour avoir les valeurs du tableau je log le tableau + la variable cree a l'interieur de la boucle =>:(uneAutreTbleau[zz])
}
//-----------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------

//!LA BOUCLE FOR Of
//?la boucle for of, elle permet de créer une boucle qui fonctionne
//?  avec les objets itérables (qui incluent Array, Map, Set, l'objet arguments, etc.).
//todo:exemple=>
const unTablau = [23, 23, 87, "samuel"];
for (let pa of unTablau) {
  console.log(unTablau);
  console.log(pa);
}
let strings = "bonjour";
for (letter of strings) {
  console.log(letter);
}

//!------------------------------------------------------------------------------------------------
function quantité(selectObject) {
  let qtéSélectionnée = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      qtéSélectionnée++;
    }
  }
  return qtéSélectionnée;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert(
    "Nombre d'options choisies : " + quantité(document.selectForm.typesMusique)
  );
});

let i = 0;
while (i < 10) {
  console.log("bonjour" + i);
  i++;
}

const arrai = [12, 25, 37, 9];
for (let k in arrai) {
  console.log(arrai[k]);
}

//!----------------------------------------------------------------------------------------------------------------

let clients = ["samuel", "louby", "alens"];
const monchat = {
  race: "ciamois",
  nom: "mimi",
  age: 3,
};
console.table(monchat);
for (let ok in monchat) {
  console.log(monchat);
}

for (let cli of clients) {
  console.log(cli);
}

// while (pose != "samuel") {
//   // pose = prompt("entrez votre mot de passe ");
// }

const trouve = 8;
let nombre;

while (nombre != trouve) {
  nombre = prompt(
    " tu dois entrer un chiffre pour deviner le nombre en question"
  );
  if (nombre > trouve) {
    console.log("moins de chiffre!");
  } else if (nombre < trouve) {
    console.log("plus de chiffre");
  } else {
    console.log(" genial tu l'as trouve");
  }
}

let chiffre = prompt("entre un chiffre");
if (chiffre < 0 || chiffre > 10) {
  console.log("ce nombre n;est pas enre 1 a 10");
} else {
  for (let i = chiffre; i < 0; i--) {
    console.log(chiffre);
  }
}

const gess = 80;
let chifre;

while (chifre != gess) {
  chifre = prompt("entrez votre chiffre");
  if (chifre < gess) {
    console.log("plus de nombre ");
  } else if (chifre > gess) {
    console.log("moins de nombre ");
  } else {
    console.log("ok tu l'as trouve");
  }
}
