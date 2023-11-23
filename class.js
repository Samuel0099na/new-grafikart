//!----------------------------------- LES CLASS EN JS -------------------------------------------
//!----------------------------------- LES CLASS EN JS -------------------------------------------
/* une class en javascript c'est une fonction speciales et sont des element fondamentale de la programation orientee objet 
dans javascript..., et elles vous permet de creer des objets reutilisable avec des propoietee et des methoode de
 */
//?-------------------------------------------------------------------------------------------------------------------------
/*Une class est un modèle ou un plan pour créer des objets.
 Vous pouvez considérer une class comme un ensemble de caractéristiques (propriétés) et
  d'actions (méthodes) que les objets créés à partir de cette class auront en commun.
*/
//!CREATION D'UNE CLASS
// pour creer une class faut utiliser la syntax "?class" suivi du nom que vous allez donner a votre class
//!exemple=>

class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  direBonjour() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}
/*Dans cet exemple, nous avons créé une classe Personne avec un constructeur (méthode spéciale appelée lors de la création d'un objet)
 et une méthode direBonjour.*/
