// Creation de la fonction et annulation de la redirection
$('#adoptionChat').submit(function(e){
    e.preventDefault();

    // Déclaration des variables correspondant aux champs

    let choix = $('#choixChat');
    let raison = $('#raisonAdoption');

    // Création d'une variable pour la validation

    // let champValide = true;

    // Validation des champs

    // if(choix === 'Selectionnez' && raison.val().length === 0){
    //     champValide = false;
    // };

    // if($(this).find(champValide)){

    //     $(this).replaceWith(`
    //     <div class= "alert alert-success">
    //         Votre demande d'adoption à bien été transmise !
    //         </div>`);
    //     } else{
    //         choix.addClass('is-invalid');
    //         raison.addClass('is-invalid');
    // }


    if(choix === 'Selectionnez'){
        choix.addClass('is-invalid');
    } else{
        choix.addClass('is-valid');
    }

    if(raison.val().length === 0){
        raison.addClass('is-invalid');
    } else{
        raison.addClass('is-valid');
    }

    if ($(this).find('is-valid')) {

        $(this).replaceWith(`
        <div class= "alert alert-success">
            Votre demande d'adoption à bien été transmise !
            </div>`);
    } else {
        choix.addClass('is-invalid');
        raison.addClass('is-invalid');
    }

    

}); // Fin .submit(function)