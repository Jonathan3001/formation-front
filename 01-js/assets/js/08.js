/* ----- Les conditions ----- */

var majoriteLegaleFR = 18;

if(14 >= majoriteLegaleFR){
    alert('Bienvenue');
}

// Le else n'est pas obligatoire !
else{
    alert('va voir google si j\'y suis');
}



/* -------------------------------

             EXERCICE​

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
​

-------------------------------- */

// 1 - Creation d'une fonction

// 2 - Demander l'age du visiteur
// var age = parseInt(prompt('Quel age as tu ?', 'Saisir ton âge'));

// 3 - Vérifier sa majorité
// var majoriteLegale = 18;

// if(age >= majoriteLegale){
//     alert('Bienvenu');
// }
// else()

/* ----- Correction ----- */



/* -------------------------------

             EXERCICE

​

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).

    S'il a la majorité légale, alors je lui souhaite la bienvenue, 

    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

​

-------------------------------- */



// -- 1. Déclarer la majorité
const MAJORITELEGALEFR = 18;

// -- 2. Vérifier si l'utilisateur est majeur (fonction)
function monUtilisateurEstMajeur(age) {
    if (age >= MAJORITELEGALEFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// -- 4. Vérification
if (monUtilisateurEstMajeur(age)) {

    alert("Bienvenue sur mon site internet réservé aux majeurs");
    document.write("0_0 !!!");

} else {
    // -- 5. Redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";
}


/* ----- Les opérateurs de comparaison ----- */

/* L'Opérateur de comparaison " == " signifie : Egale à.
Il permet de vérifier que 2 variables sont identiques.

L'Opérateur de comparaison " === " signifie : Strictement égale à.
Il va comparer la valeur, mais aussi le type !

L'Opérateur " != " signifie : Différent de.
L'Opérateur " !== " signifie : Strictement différent de.
 */



/* -------------------------------

            EXERCICE :

J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.​

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.​

En cas d'échec une alert m'informe du problème.

Si tous se passe bien, un message de bienvenue m'accueil.

-------------------------------- */


// // -- BASE DE DONNEES

var email, mdp;

email = "wf3@hl-media.fr";

mdp = "wf3";

/* // 1 - Demander à l'utilisateur son email et mdp
var checkMail = prompt('Saisissez votre email');

// 2 - Si echec : alerte info probleme
if(checkMail === email){
    var checkMdp = prompt('Saisissez votre mot de passe');
    alert('Bienvenue sur mon site !');
} else{
    alert('Erreur de saisie');
}

// 3 - Si correct : bienvenue */

/* ----- Correction -----*/

// // -- 1. Demander a l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre adresse email ?", "<Saisissez votre email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- Exemple SANS les fonctions

// // -- 2. Je vérifie si l'email saisie correspond avec celle dans la BDD
// if ( emailUser === email && mdpUser === mdp ) {

// // -- 3. Tous est ok
// alert("Bienvenue " + emailUser + " !");

// } else {
// // -- 4. Erreur au niveau de l'identification.
// alert("ATTENTION, email / mot de passe incorrect.");
// }

// -- Exemple AVEC une fonction

function login(emailUser, mdpUser) {
    return emailUser === email && mdpUser === mdp;
}

if (login(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser + " !");
} else {
    alert("ATTENTION, email / mot de passe incorrect.");
}

/* ----- Les Opérateurs Logiques ----- */

// # L'opérateur ET : &&. Si la combinaison email et emailUser correspond, ET la combinaison mdpUser et mdp correspond.

// => Dans cette condition, les 2 doivent OBLIGATOIREMENT correspondre pour être validée.
// Ex: if(emailUser === email && mdpUser === mdp) {...}

// # L'opérateur OU : ||. Si la combinaison email et emailUser correspond, ET / OU la combinaison mdpUser et mdp correspond.
// => Dans cette condition, au moins l'une des deux doit correspondre pour être validée.
// Ex: if(emailUser === email || mdpUser === mdp) {...}

// # L'opérateur ! : ou encore NOT. Il signifie le CONTRAIRE DE.

// var monUtilisateurEstApprouve = true;
// if(!monUtilisateurEstApprouve) {...}
// Si mon utilisateur n'est pas approuvé

// Reviens à ecrire
// if(monUtilisateurEstApprouve === false) {...}