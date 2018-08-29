// -- Récupération des informations
    $('#contact').submit(function(e){
        e.preventDefault();

        // $('#contact .is-invalid').removeClass('is-invalid');
        // $('#contact .alert alert-success alert-contact').remove();

        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

        
        // if(nom.val().length === 0){
        //     nom.addClass('is-invalid');
        // } else {
        //     nom.addClass('is-valid');
        // }

        // if(prenom.val().length === 0){
        //     prenom.addClass('is-invalid');
        // } else {
        //     prenom.addClass('is-valid');
        // }

        // if (email.val().length === 0) {
        //     email.addClass('is-invalid');
        // }

        // if (tel.val().length === 0) {
        //     tel.addClass('is-invalid');
        // }

        // if ($(this).find('.is-invalid').length === 0){
        //     $(this).prepend(`
        //     <div class="alert alert-danger">
        //         Veuillez saisir tous les champs.
        //     </div>
        // `);
        // }

        // $('#contact').validate({
        //     submitHandler: function(form){
        //         form.submit();
        //     }
        // })
    });


    /* ----- Correction ----- */


// -- 1- Initialiser jQuery (DOM READY)

$(function () {

    // -- 2- Déclaration d'un tableau pour stocker les contacts
    var CollectionDeContacts = [];
    /**
     * -- 3- FONCTIONS
     * 
     * 1- valider une adresse mail
     */
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
     /* 
     * 2- valider un n° de téléphone
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }
    /**
     * -- 4- TRAITEMENT DU FORMULAIRE
     */
    // -- 5- Détecter l'envoi du formulaire (tout le travail de vérification
    // des champs du formulaire se fait dans une fonction .on('submit'))

    $('#contact').on('submit', function (e) {

        // -- 6- stopper la redirection de la page
        e.preventDefault();

        // -- 7- récupérer les champs pour en vérifier les valeurs
        let prenom, nom, email, tel;
        nom = $('#nom');
        prenom = $('#prenom');
        email = $('#email');
        tel = $('#tel');

        // -- 8- création d'une variable de vérification (booléen)
        let mesInformationsSontValides = true;

        // -- 9- vérification des champs
            // -- 9.1- le prénom (longueur)
            if(prenom.val().length === 0){
                // dans mon IF le champs n'est pas renseigné
                mesInformationsSontValides = false;
                // donc mon champs n'est pas valide
            }

            // -- 9.2- le nom (longueur)
            if (nom.val().length === 0){
                // dans mon IF le champs n'est pas renseigné
                mesInformationsSontValides = false;
                    // donc mon champs n'est pas valide
            }

            // -- 9.3- le téléphone (fonction)
            if(!validateTel(tel.val())){
                // Si l'utilisateur a saisi des caractères non conformes à ce qui est attendu (défini dans la fonction validateTel), alors la fonction validateTel retourne 'false'
                mesInformationsSontValides = false;
                    // donc mon champs n'est pas valide
            }
            // -- 9.4- le mail (fonction)
            if(!validateEmail(email.val())){
                mesInformationsSontValides = false;
            }
        // -- 10- si les champs sont tous valides
        if(mesInformationsSontValides){
        
            // -- 10.1- préparer le contact (objet)
            let Contact = {
                // indice / clé     // valeur
                nom     : nom.val(),
                prenom  : prenom.val(),
                email   : email.val(),
                tel     : tel.val(),
            };
            // console.log(Contact);

            // -- 10.2- vérification si le contact existe déjà (variable + for)
            let estPresent = false;
            
                // -- 10.2.1- parcourir le tableau des contacts pour chercher si l'utilisateur existe déjà 
            for(let i = 0; i < CollectionDeContacts.length; i++){
                if(Contact.email === CollectionDeContacts[i].email){
                    estPresent = true;
                    break; // je force la sortie dès qu'on a une correspondance
                }
            }
            console.log(estPresent);

            // -- 10.3- si le contact est absent
            if(!estPresent){
                                
                // -- 10.3.1- ajouter au tableau des contacts
                CollectionDeContacts.push(Contact);

                // -- 10.3.2- mettre à jour l'affichage du tableau HTML
                $('.aucuncontact').hide();
                $(`<tr><td>${Contact.nom}</td><td>${Contact.prenom}</td><td>${Contact.email}</td><td>${Contact.tel}</td></tr>`).appendTo($('#LesContacts > tbody'));
                // -- 10.3.3- réinitialiser le formulaire
                $('#contact')[0].reset();
                $('#contact').get(0).reset();
                $('#contact').trigger('reset');
                $('#contact.form-control').val('');
                document.getElementById('contact').reset();

                // 10.3.4- afficher un message
                $('.alert-contact').fadeIn().delay(4000).fadeOut();
            } else{
                // -- 10.3.5- alert si le contact est présent
                alert('ATTENTION !\nTu es déjà inscrit !');
                $('#contact').get(0).reset();
            }
            
        } else{
            // alerte utilisateur si un champs est mal renseigné
            alert('Attention\nVeuillez renseigner tous les champs.');
            // \n => retour à la ligne
        }

    });  // -- Fin de on.('submit')

}); // -- Fin de jQuery Ready

