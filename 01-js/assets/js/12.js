/* ----- Le DOM ----- */

/* Le DOM est une interface de développement en JS pour HTML.
Grâce au DOM, je vais être en mesure d'accéder ou modifier mon code HTML.

L'Objet "document" : c'est le point d'entrée vers mon contenu HTML.
Chaque page chargée dans mon navigateur a un objet "document".*/

/* 
Comment puis-je faire pour récupérer les différentes informations de ma page HTML ? */

// ----- document.getElementById -----
/* document.getElementById est une fonction qui va permettre de récupérer un élément HTML à partir de son identifiant unique : ID. */

let bonjour = document.getElementById('bonjour');
console.log(bonjour);

// ----- document.getElementsByClassName -----
/* document.getElementsByClassName est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur classe. */

const contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// /!\ Attention /!\ Me renvoi un tableau JS avec mes éléments HTML.

// ----- document.getElementsByTagName -----
/* document.getElementsByTagName est une fonction qui va permettre de récupérer un ou plusieurs éléments (une liste) HTML à partir de leur balise. */

const p = document.getElementsByClassName('p');
console.log(p);

// NB: https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector