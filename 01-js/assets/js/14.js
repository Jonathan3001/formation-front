/* ----- Les Evènements ----- */

/* Les évènements vont me permettre de déclencher une fonction, c'est à dire une série d'instructions suite à une action de mon utilisateur.

Objectif : Etre en mesure de capturer ces évènements afin d'exécuter une fonction.

Les évènements : MOUSE (Souris)
    click : au clic sur un élément ;
    dblclick : au double clic ;
    mouseenter : la souris passe au dessus d'un élément ;
    mouseleave : la souris sors de l'évènement ;
    mouseover : au passage de la souris
    
    cf : https://developer.mozilla.org/fr/docs/Web/API/MouseEvent 
    
Les évènements : KEYBORD (Clavier)
    keyup : une touche du clavier a été relachée ;
    keydown : une touche du clavier a été enfoncée ;
    
    cf : https://developer.mozilla.org/fr/docs/Web/API/KeybordEvent

Les évènements : WINDOW (Fenêtre)
    scroll : défilement de la fenêtre ;
    resize : redimentionnement de la fenêtre ;
    
Les évènements : FORM (Formulaire)
    change : pour les éléments <input>, <select> et <textarea> ;
    submit : à l'envoi (soumission) du formulaire ;
    input : pour capter la saisie d'un utilisateur sur un champ <input> ;
    
---------- Les ecouteurs d'évènements ----------

Pour attacher un évènement à l'élément, ou autrement dit, pour déclarer un ecouteur d'évènement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :*/

var p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge(){
    p.style.color = "red";
}

p.addEventListener('mouseover', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création du champ input
var input = document.createElement('input');
input.type = "text";
input.id = "monId";
input.setAttribute("placeholder", "Saisissez un contenu");

// -- Ajout dans la page
document.body.appendChild(input);

//  -- On écoute l'évènement "change" sur le champ input et on execute la fonction "displayUserInput"
function displayUserInput(){
    console.log(event);
    alert(input.value);
}

input.addEventListener('change', displayUserInput);
