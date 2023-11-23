//!----------------------- LES FONCTION EN JS------------------------------------------
//!----------------------- LES FONCTION EN JS------------------------------------------

function candrive(pays, age) {
  if ((pays === "us" && age >= 17) || (pays === "fr" && age >= 18)) return true;
  else {
    return false;
  }
}
//  exemple
let mytext = " i'm a real cool boy";
let myNewstrings = mytext.replace("real cool boy", "real man");
console.log(myNewstrings);
//ici la function replace selectionne une chaine("real cool boy") et la remplace avec une sous-chaine("real man")
//et renvoie cette nouvelle chaîne.

const myAurray = ["i ", "love", "my", "self"];
const mynewAurray = myAurray.join(" ");
console.log(mynewAurray);

/*ici la function join manipule un aurray et rassemble toutes les chaine de caractere
 et devienne une seule chaine de caractere et renvoie cette nouvelle chaîne.

/* exemple des function anonyme
Vous pouvez rencontrer des fonctions définies et invoquées de manière légèrement différentes.
 Nous venons juste de créer une fonction comme celle-ci :*/
function myfunction() {
  alert("hello world");
}

//vous pouvez creer une function sans nom aussi
// const = function() {
//     alert('hello');
//   }

/*Ceci est une fonction anonyme — elle n'a pas de nom ! De plus, elle ne produira pas d'effet par elle-même.
 Les fonctions anonymes sont généralement utilisées en association avec un gestionnaire d'évènement,
 comme dans l'exemple suivant qui lance le code inscrit dans la fonction lorsque le bouton associé est cliqué :*/
// let myButton = document.querySelector("#btn");
// myButton.oncclick = function () {
//   alert("bonjour");
// };

/*Il est également à noter que parfois les paramètres sont optionnels — vous n'avez pas à les spécifier.
 Si vous ne le faites pas, la fonction va généralement adopter un comportement par défaut. 
 Par exemple, la fonction de tableau join() a des paramètres optionnels :*/
// JS;
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" "); // renvoie 'I love chocolate frogs'
var madeAString = myArray.join(); // renvoie 'I,love,chocolate,frogs'

/*Si aucun paramètre n'est inclus pour spécifier un caractère de jointure / délimitation,
 une virgule est utilisée par défaut.*/
//?Des fonctions à l'intérieur de fonctions
/*Gardez à l'esprit que vous pouvez appeler une fonction de n'importe où, même à l'intérieur d'une autre fonction. 
Ceci est souvent utilisé comme un moyen de garder le code bien organisé — 
si vous avez une grande fonction complexe, 
elle est plus facile à comprendre si vous la divisez en plusieurs sous-fonctions :*/
//!----------------------------------exemple--------------------------------------------------
function myBigfunction() {
  let uneValue = "je suis samuel";

  unefunction1(uneValue);
  unefunction2(uneValue);
  unefunction3(uneValue);
}

function unefunction1(Value) {
  console.log(Value);
}

function unefunction2(Value) {
  console.log(Value + "naphard");
}

function unefunction3(Value) {
  console.log(alert(Value));
}
//!-----------------------------other exemple------------------------------------------
var créerAnimal = function (nom) {
  let sexe;

  return {
    setNom: function (nouveauNom) {
      nom = nouveauNom;
    },

    getNom: function () {
      return nom;
    },

    getSexe: function () {
      return sexe;
    },

    setSexe: function (nouveauSexe) {
      if (
        typeof nouveauSexe == "string" &&
        (nouveauSexe.toLowerCase() == "mâle" ||
          nouveauSexe.toLowerCase() == "femelle")
      ) {
        sexe = nouveauSexe;
      }
    },
  };
};

var animal = créerAnimal("Licorne");
animal.getNom(); // Licorne

animal.setNom("Bobby");
animal.setSexe("mâle");
animal.getSexe(); // mâle
animal.getNom(); // Bobby

// manipulation dans un objets [araay]

function mafonction(monObjet) {
  monObjet.fabricant = "nissan";
}

let uneVoiture = {
  fabricant: "nissan",
  modele: "patrol",
  anne: 2010,
};

let x, y;

let otherVoiture = {
  fabricant: "mercedez",
  modeles: "gla250",
  anne: 2018,
};

x = otherVoiture.modeles;
y = otherVoiture.fabricant;
l = otherVoiture.anne;
mafonction(otherVoiture);
console.log(a, b, c);
