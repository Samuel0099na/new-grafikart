const notes = [22, 37, 19];

function upnote(n) {
  n[2]++;
}
upnote(notes);
console.log(notes);
// il faut passer la premiere fonction comme parametre au deuxieme fonction pour qu'elle puisse prendre en compte l'incrementation
// de l'index [2]++
// ---------------------------------------------------
// une fonction n'est pas oblige de return qulque chose
function greeting(name) {
  console.log(`bonjour ${name}`);
}
greeting("samuel");
greeting("marco");

// une function est aussi capable d'acceder a une valeur qui n'est pas dans son scope
//par exemple
let i = 0;
function greeting2(number) {
  i++;
  console.log(`bonjour je compte  ${number}`);
}

greeting2(25);
console.log(i);
greeting2(125);
console.log(i);
//ici tu peux voir qque i a etet incremente de 1 dans la premiere appel puis +1 dans la second appel
//et j'ai aussi change le parameter de {name} en {number}

var maVariableExterne = "Hello";

function maFonction() {
  var maVariableExterne = "Bonjour";
  console.log(maVariableExterne); // Cette variable est locale à la fonction et a préséance sur la variable externe.
}

maFonction();

console.log(maVariableExterne);
// -----------------------------------------------------------

// ?la syntax ------------------- this -------------------------------
// ?la syntax ------------------- this -------------------------------
function theThis() {
  console.log(this);
}
theThis.call("hello");

const object = {
  prenom: "samuel",
  nom: "naphard",
  fullname: function () {
    console.log(`${this.prenom} ${this.nom}`);
  },
};
// dans cette exemple la le this me permet d''appler la function sans de la passer de parametre
object.fullname();

//--------------------------------------------------------------
//function fleche
const unefunction = (a, b) => {
  console.log(a * b);
};
unefunction(2, 3); // ca va me donner (6) dans la console
//une autre avantage avec la function fleche est que je peux l'ecrire sur une seul ligne de code
const somme = (x, y) => x - y;
console.log(somme(5, 3)); //ca va soustraire (5-3)
// --------------------------------------------------------------------
// passer une function comme parameter d'une autre function = [callback]
const ispair = (a, fn) => {
  if (a % 2 === 0) {
    fn();
  } else {
    console.log("mon nombre n'est pas pair");
  }
};
ispair(
  4,
  (sam = () => {
    console.log("mon nombre est pair");
  })
);
/*dans cet exemple la  j'appelle la function ispair et je lui passe la valeur 4 puis
la function(//? [SAM])=>[callback]
 comme argument et cette function sam c'est lui qui fais
l'action de loger que (//?" mon nombre est pair")
*/
//--------------------------------------------------------------------------------------------------
// une autre exemple
add = (a) => a + a;
multiplier = (b) => b * b;

additionner = (a, add) => add(a);
console.log(additionner(15, add));
console.log(additionner(15, multiplier));
//dans cet exemple la j'ai cree deux function qui sont [multiplier]=> qui multiplie b*b
//puis j'ai ceree la function [add]=> qui additionne a+a et par la suite je cree une nouvelle function
//qui s'appelle additionner et je la passe une de ces deux function comme argument dites [CALLBAK]
// --------------------------------------------------------------------------------------

// exercices
//!on cree un chiffre entre 0 et 10
/*pour generer un nombre random entre 0 et 10 avec une function*/
function getrandomint(max) {
  return Math.floor(Math.random() * (max + 1));
}
// on av metter le nobre dans une variable const
const solution = getrandomint(10);
console.log(solution);
// -------------------------------------------------
//on fait en sorte que l'utilisateur  a seulement trois 3 essai pour rentrer le nombre
function isright(n) {
  return solution === n;
}
//une function pour que le user entre un chiffre
function deviner() {
  const devine = prompt("entrer un chiffre ") * 1; // notion imporatnt lorsque vous faites un prompt il faut toujour faire *1 pour que vous trouverez un chiffre
  return isright(devine);
}
// for (let i = 0; i < 3; i++) {
//   if (deviner()) {
//     console.log("bravo");
//     break;
//   } else if (i === 2) {
//     console.log(" vous avez perdu");
//   }
// }
// ----------------------------------------------
//-----------------------------------------------------------------------------

// exercice pour deviner un nombre premier
const ispremier = (n) => {
  if (n < 2) {
    return;
  }
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log("33", ispremier(33));
console.log("12", ispremier(12));
console.log("3", ispremier(3));

// autre exercice pour deviner un nombre premiere
// creer une fonction avec une parametre dedans(..) qui va parcourir le nombre avec une boucle for
const numberpr = (w) => {
  if (w < 2) {
    // cette ligne de code c'est ce qu'on appelle un [" early return" ]qui me permet de return false en cas ou la condition est false sur le parametre (.) de la function
    return false;
  }
  for (let f = w - 1; f < 1; f--) {
    if (w % f === 0) {
      return false;
    }
  }
  return true;
};

console.log("1", numberpr(1));
console.log("2", numberpr(2));
console.log("0", numberpr(0));
console.log("3", numberpr(3));
console.log("11", numberpr(11));
console.log("12", numberpr(12));

//--------------------------------------EXO  PRATIQUER LES FUNCTIONS--------------------------------------
//EXO=>1
// verifier si un strings est palendrome

// creer un function ispalindrome
const ispalindrome = (word) => {
  const lettre = word.split(""); // ce ligne de code sigmifie que je transform le parametre(word) en tableau
  lettre.reverse(""); // etc ce meme tableau je l'inverse avec cette methode ici
  const reversedWord = lettre.join(""); // et ici dans cette ligne de code je viens de trasformer mon tableau inverser  en string
  return word.toUpperCase === reversedWord.toUpperCase(); // et pour finir je compare mon parametre recu avec la methode to upperase dessus avec le mon tableau inverser  en string
};
//et je pourraus le coder comme ca
const isalindrome = (word) => {
  const reversedWord = word.split("").reverse().join;
  return word.toUpperCase === reversedWord.toUpperCase;
};

const words = {
  Solos: true,
  Été: true,
  Level: true,
  Rotator: true,
  bonjour: false,
  samuel: false,
};

for (let word in words) {
  if (ispalindrome(word) !== words[word]) {
    console.error(`ispalindrome ${words} aurait du renvoyer true`);
  }
}

//explication de cet exercice
//----------------------------------------------------------------------------------------------
/*dans la fonction ispalindrome on a aplique la methode is split en premier pour qu'on puisse transformer les strings en array
ensuite la methode reverse pour renverser les lettre a l'envers ensuite de recoller avec la methode join pour refaire les strings
et enfin faire le return la comparaison du  mot original en uppercase[word.toUpperCase] avec le mot renverser en uppercase[reversedWord.toUpperCase]
 ==>[word.toUpperCase === reversedWord.toUpperCase;] pour voir si il sont les memes 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//? EXO=>2
/*objectif c'est de caculer la moyennne de note de  chaque eleve et par la suite de  les classer
de plus grands au plus petits et pour firnir faire un top trois[3] des eleves qui ont 
la plus grande moyenne parmis les eleves*/

const students = [
  {
    nom: "samuel",
    notes: [12, 18, 13, 9, 11],
  },
  {
    nom: "louby",
    notes: [10, 9, 18, 15, 9],
  },
  {
    nom: "alens",
    notes: [18, 17, 11, 9, 10],
  },
  {
    nom: "manouch",
    notes: [11, 9, 8, 17, 13],
  },
  {
    nom: "manon",
    notes: [17, 16, 9, 18, 12],
  },
];
// on va calculer la sum pour renvoyer la moyenne des notes de chaque eleves dans le tableau original
// la fonction moyenne qui a la boucle permet de parcourir(iterer) mon tableau suite a la methode (for of)
// puis on va additioner  la variable sum(=0) avec la variable (note) qui a parcourie les notes dans le tableau original
// puis enfin on return la valeur trouve grace avec la boucle puis on la divise avec la quantite de notes que chaques eleve ont [=>[notes.length]]
const moyenne = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};
// on va creer une fonction pour classer les etudiant avec les notes de plus grand au plus petit
const compareStudent = (a, b) => {
  return b.moyenne - a.moyenne;
};
/*dans la boucle ci-dessous, cette boucle permet de iterer le tableau original  grace a la variable (student.moyenne) 
  qui a pour a valeur la fonction moyenne => [moyenne(students.notes)]== [qui donne sa valeur a student.moyenne] 
  la variable student(variable creer dans la boucle) qui va parcourir chaque objets dans le tableau original
  grace a la focntion cree qui est moyenne*/
for (let student of students) {
  student.moyenne = moyenne(student.notes);
  student.best = Math.max(...student.notes);
  student.mauvaise = Math.min(...student.notes);
}

students.sort(compareStudent); // dans ce ligne de code on utilise la methode sort pour
const formatStudent = (student) => {
  return `${student.nom} avec la moyenne de ${student.moyenne} best note ${student.best} pire note ${student.mauvaise}`;
};

console.table(students);
console.log(` top trois(3) des etudiants 
1: ${formatStudent(students[0])}
2: ${formatStudent(students[1])}
3: ${formatStudent(students[2])}
`);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//objectif c'est de calculer la frquence des mots dans une citation et ensuite classement des mot les plus repetes
//1erment creer une variable ui contient la citation

const phrase = `La persévérance est la clé du succès. Dans chaque défi, 
  il y a une opportunité. L'opportunité peut sembler difficile, 
  mais la difficulté est souvent le creuset où se forge le succès.
   Alors, persévérez, persévérez et persévérez encore, car la persévérance
    est la force qui peut transformer vos rêves en réalité.;`;

const frequencies = {};
const ignored = [",", ".", ";", "'"];
let cleanphrased = phrase.toLowerCase();
for (let character of ignored) {
  cleanphrased = cleanphrased.replace(character, "");
}
const word = cleanphrased.split(" ");
for (let mot of word) {
  if (mot !== "") {
    if (frequencies[mot]) {
      frequencies[mot]++;
    } else {
      frequencies[mot] = 1;
    }
  }
}
const frequenciesArray = [];
for (let l in frequencies) {
  frequenciesArray.push({
    mot: l,
    count: frequencies[l],
  });
}
frequenciesArray.sort((a, b) => b.count - a.count);
console.log(
  `les mots les plus frequents sont :
   ${frequenciesArray[0].mot} ( ${frequenciesArray[0].count}),
   ${frequenciesArray[1].mot} ( ${frequenciesArray[1].count}), 
   ${frequenciesArray[2].mot} ( ${frequenciesArray[2].count}) `
);
