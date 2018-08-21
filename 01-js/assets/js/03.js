/* ----- La Concatenation ----- */

var debutDePhrase = "Aujourd'hui ";
var dateDuJour = new Date();
var suiteDePhrase = ", sont présent ";
var nombreDeStagiaire = 10;
var finDePhrase = " apprenants.<br>";

/* Nous souhaitons maintenant, grâce à la concatenation, afficher le tout en une phrase sur notre page ! */

document.write(debutDePhrase + dateDuJour.getDate() + '/' + (dateDuJour.getMonth() + 1) + '/' + dateDuJour.getFullYear() + suiteDePhrase + nombreDeStagiaire + finDePhrase);