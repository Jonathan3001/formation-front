/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

/* var prenom = prompt('Quel est ton prénom ?');

age = parseInt(prompt('Bonjour ' + prenom + ' , Quel age as tu ?'));
var year = new Date();
alert('Tu es donc né en ' + (year.getFullYear() - age));
alert('Bonjour ' + prenom + ', tu as ' + age + ' ans !'); */

// -- Correction

// 1 - Initialisation des variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// 2 - Création d'une fonction
function identity(){

    // 3 - Je demande à l'utilisateur son prénom
    var prenom = prompt("Hello ! What is your name ?", "Saisir votre prénom");
    console.log(prenom);
    console.log(typeof prenom);

    // 4 - Je lui demande son âge
    var age = parseInt(prompt("Hello" + prenom + " ! How old are you ?","Saisir votre age"));
    console.log(age);

    // 5 - Déduire l'année de naissance et l'afficher dans une alerte
    var anneeDeNaissance = anneeActuelle - age;
    alert("AMAZING ! So you were born in " + anneeDeNaissance);

    // 6 - Récapitulatif dans la page
    document.write("Hello" + prenom + "you're" + age + "years old !");
}

// 7 - Exécuter la fonction
identity();
