/* ---------- La Disponibilité du DOM  ---------- */

/* A partir du moment où mon DOM, c'est à dire l'ensemble de l'arborescence de ma page HTML est complètement chargée, je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction qui sera appelée AUTOMATIQUEMENT par jQuery lorsque le DOM sera entièrement défini.

3 façons de faire : */

// -- 1ère méthode
jQuery(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé ; je peux procéder à mon code.
    // ...
    // ...
    // ...
    // ...
    // ...
});

// -- 2ème méthode
$(document).ready(function(){

});

// -- 3ème méthode
$(function(){
    // ...
});

// -- 4ème méthode en ES6
$(()=>{
    // alert('Bienvenue dasn ce cours JQ');

    // en JS
    document.getElementById('texteEnJQ').innerHTML = "<strong>Mon texte en JQ</strong>";

    // En JQ
    $('#texteEnJQ').html("Mon texte en JQ");
});