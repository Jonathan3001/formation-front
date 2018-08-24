/* ----- La Manipulation des contenus ----- */

l = e => console.log(e); // = var l = function(e) {console.log(e)}

// -- Je souhaite récupérer mon lien Google... Comment procéder ?
const google = document.getElementById('google');
l(google);

// -- Maintenant je souhaite accéder aux informations de ce lien...

    // -- A : Le Lien vers lequel pointe ma balise
    l(google.href);

    // -- B : l'ID de la balise
    l(google.id);

    // -- C : La classe de la balise
    l(google.className);

    // -- D : Le texte de la balise
    l(google.textContent);

    /* 
    Maintenant, je souhaite modifier le texte (contenu) de mon lien !*/
    google.textContent = "Mon lien vers Google !";

/* ----- Ajouter un élément dans ma page ----- */

/* Nous allons procéder en deux étapes :
    1 - La fonction document.createElement() va permettre de générer un nouvel élément dans le DOM; que je pourrai modifier par la suite avec les méthodes que nous venons de voir...
    
    PS: Ce nouvel élément est placé en mémoire !
    
    2 - L'ajouter à la page.*/

// -- Définition de l'élément
var span = document.createElement('span');

// -- Si je souaite lui donner un ID 
span.id = "monSpan";

// -- Si je souhaite lui attribuer du contenu
span.textContent = "Mon Beau Texte en JS !";

// -- Je l'ajoute à ma page
google.appendChild(span);



/* -------------------------------

            EXERCICE

En partant du travail déjà réalisé sur la page.

Créez directement dans la page une balise <h1></h1> ayant comme contenu : 

"Titre de mon Article".

​

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.

-------------------------------- */

/* const bleach = document.getElementById('bleach');
l(bleach);

var a = document.createElement('a');
a.id = "monH1";
a.textContent = "Titre de mon Article";
bleach.appendChild(a); */

// -- Correction

var h1 = document.createElement('h1');
var a = document.createElement('a');
a.textContent = "Le Pole S c'est génial !";
a.href = "#";
h1.appendChild(a);
document.body.appendChild(h1);
a.style.color = "red";
a.style.textDecoration = "none";