// -- Récupération des informations
$('#contact').submit(function(e){
    e.preventDefault();

    $('#contact .is-invalid').removeClass('is-invalid');

    const nom = $('#nom');
    const prenom = $('#prenom');
    const email = $('#email');
    const tel = $('#tel');

    if(nom.val().length === 0){
        nom.addClass('is-invalid');
    } else {
        nom.addClass('is-valid');
    }

    if(prenom.val().length === 0){
        prenom.addClass('is-invalid');
    } else {
        prenom.addClass('is-valid');
    }

    if (!validateEmail(email.val())) {
        email.addClass('is-invalid');
    } else {
        email.addClass('is-valid');
    }

    if (!validateTel(tel.val())) {
        tel.addClass('is-invalid');
    }

    if ($(this).find('.is-invalid').length === 0){
        $(this).prepend(`
        <div class="alert alert-danger">
            Veuillez saisir tous les champs.
        </div>
    `);
    }
});