/* ----- Les fonctions ----- */

/* Déclarer un fonciton
NB : Cette fonction ne retourne aucune valeur et ne prend pas de paramètres. */

function bonjour(){
    alert('bonjour !');
}

/* Je vais executer ma fonction "bonjour et déclencher ses instructions." */
bonjour();

// function nomDeMaFonction (argument 1, argument 2, argument n){
// Les instructions
// }

function ditBonjour(prenom, nom){
    console.log(prenom);
    document.write('Bonjour <strong>' + prenom + ' ' + nom + '</strong> !');
}

// Exécuter une fonction avec des arguments
ditBonjour('Jonathan', 'BOURDARIAS');

/* ----- Exercice : Créer une fonction permettant d'effectuer l'addition de deux nombre (nb1 et nb2). ----- */

function addition(nb1, nb2){
    return nb1 + nb2;     
}

console.log(addition(2, 5));