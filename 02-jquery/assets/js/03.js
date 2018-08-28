/* Le chainage de methode avec jQuery */

$(function(){
    console.log($('div'));

    // -- Je cache toutes les DIV de ma page HTML
    $('div').hide('slow', function(){
    /* 
    La méthode hide() de JQ :
    - est une animation
    - s'applique sur tous les éléments ciblés avec mon sélecteur
    ===
    A la fin du hide() on ajoute pour voir une alert() */

    // $('div').css('background', 'green');
    // $('div').css('color', 'red');
    // $('div').show('slow');   

}); // -- fin du hide()
    // alert('fin du hide() !');
 $('p').hide(1000).css('color', 'blue').css('font-size', '30px').delay(2000).show(500);
}); // -- fin de $