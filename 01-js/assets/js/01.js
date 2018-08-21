/* alert('Mon fichier js fonctionne'); */

// Deux slash pour faire un commentaire uniligne

/* 
Ici, je peux faire un commentaire sur plusieurs lignes.
*/

// -- 1 : Déclarer une variable JS
var prenom;

// -- 2 : Affecter une valeur
prenom = "Jonathan";

// -- 3 : Afficher la valeur de ma variable dans la console

console.log(prenom);

/* ---------- Les types de variable ---------- */

// -- typeof me permet de connaitre le type de ma variable.
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre.
var age = 29;

// -- Connaitre son type.
console.log(typeof age);

/* ---------- La portée des variables ----------

Les variables déclarées directement à la racine du fichier JS sont appelées : variables GLOBALES.
Elles sont accessible dans l'ensemble de vos document, y compris dasn les fonctions.

Les variables déclarées à l'intérieur d'une fonction sont appelées: variables LOCALES.

Elles sont disponible UNIQUEMENT dans le scope de la fonction.*/

// -- Les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX)
var unBoolean = false; //true
console.log(unBoolean);
console.log(typeof unBoolean);

// -- Les Constantes

/* La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau... */

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// Je ne peut pas faire cela...
// USER = "Jonathan";
// TypeError : Assignment to constant variable.

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseInt() pour retourner un entier à partir de mon string. */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// Pour convertir un Float
unNombre = "12.55";
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Convertir un nombre entier ou float en string
unNombre = 10;
var monString = unNombre.toString();
console.log(monString);
console.log(typeof monString);