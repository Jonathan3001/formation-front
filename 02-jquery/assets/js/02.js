/* ----- Les Selecteurs jQuery ----- */

// -- Format => $('selecteur');

// -- en JS => document.getElementById('balise');   => en JQ => $('balise');
// -- en JS => document.getElementsByClassName('classe');   =>en JQ => $('.classe');
// -- en JS => document.getElementsByTagName('id'); => en JQ => $('#id');

// -- en JS => document.querySelector('balise');    => en JQ => $('balise');
// -- en JS => document.querySelector('.classe');    => en JQ => $('.classe');
// -- en JS => document.querySelector('#id');    => en JQ => $('#id');

$(function(){
    l = e => console.log(e);

    log = e => console.log(e);
    log('Hello');

    // -- Sélectionner les SPAN
    // -- en JS => 
    log(document.getElementsByTagName('span'));

    // -- en JQ =>
    log($('span'));

    // -- Sélectionner le menu par son Id
    // -- en JS
    log(document.getElementById('menu'));

    // -- en JQ
    log($('#menu'));

    // -- Sélectionner par la classe
    // -- en JS
    log(document.getElementsByClassName('MaClasse'));

    // -- en JQ
    log($('.MaClasse'));

    // -- Sélectionner un élément de ma page par son attribut
    log($('[href="#"]'));
    log($('[action="home.php"]'));

});