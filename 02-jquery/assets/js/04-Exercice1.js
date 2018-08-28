// 1 - Soumission du formulaire
// $(function(){
//     console.log($('form'));

//     $('form').hide('slow', function(){

//     })
// });

$("#MonFormulaire").submit(function (event) {
    event.preventDefault();
    console.log($(this));

    $('form').hide('slow', function(){

    });
    // $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').prependTo('body'); -- OU --
    // $('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</strong> !</p>').appendTo('body'); -- OU --
    $(this).replaceWith('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</strong> !</p>'); // Attention : 'replaceWith' remplace le formulaire par '<p></p>', il ne cache pas le formulaire !
    
});

