// // 1 - Annuler la redirection
// $('#contact').submit(function(e){
//     e.preventDefault();

//     $('#contact .is-invalid').removeClass('is-invalid');
//     $('#contact .is-valid').removeClass('is-valid');
//     $('#contact .alert-danger').remove();
    
//     const nom = $('#Nom');
//     const prenom = $('#Prenom');
//     const adresse = $('#Adresse');
//     const cp = $('#CodePostal');

//     let champValid = true;
    
//     // Validation du champ 'nom'
    
//     if(nom.val().length === 0){
//         champValid = false;
//     }

//     // Validation du champ 'prenom'
//     if(prenom.val().length === 0){
//         champValid = false;
//     }

//     // Validation du champ 'adresse'
//     if(adresse.val().length === 0){
//         champValid = false;
//     }

//     // Validation du champ 'code postal'
//     if(cp.val().length === 0){
//         champValid = false;
//     }

//     if(champValid){
//         $(this).replaceWith(`
//         <div class= "alert alert-success">
//             Votre formulaire à bien été transmis !
//         </div>`);
//     } else{
//         $(this).prepend(`
//         <div class="alert alert-danger">
//             Veuillez saisir tous les champs.
//         </div>`);
//     }
    
// });

// Valider tous les champs dans un seul 'if'

$('#contact').submit(function (e) {
    e.preventDefault();

    $('#contact .is-invalid').removeClass('is-invalid');
    $('#contact .is-valid').removeClass('is-valid');
    $('#contact .alert-danger').remove();

    const nom = $('#Nom');
    const prenom = $('#Prenom');
    const adresse = $('#Adresse');
    const cp = $('#CodePostal');

    let champValid = true;

    if(nom.val().length === 0 || prenom.val().length === 0 || adresse.val().length === 0 || cp.val().length === 0){
        champValid = false;
    };

    if (champValid) {
        $(this).replaceWith(`
        <div class= "alert alert-success">
            Votre formulaire à bien été transmis !
        </div>`);
     } else{
        $(this).prepend(`
        <div class="alert alert-danger">
           Veuillez saisir tous les champs.
        </div>`);
     }

});


// Correction

/* <h1>Révisions JS ~ jQuery ~ Bootstrap</h1>
        <h3>Validation formulaire</h3>
        <hr>

        <form id="contactForm" class="needs-validation" novalidate>
            <div id="msg" class="alert" role="alert"></div>
            <div class="form-group row">
                <label for="pseudo" class="col-sm-2 col-form-label">Pseudo</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="pseudo" placeholder="Pseudo" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="Email" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="pwd" placeholder="Password" required>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2" for="select">Pays</label>
                <select class="col-sm-10 form-control" id="select" required>
                    <option selected>Pays</option>
                    <option value="1">France</option>
                    <option value="2">Australie</option>
                    <option value="3">Japon</option>
                </select>
            </div>

            <div class="form-group row">
                <button type="submit" class="btn btn-outline-info btn-block">Envoyer</button>
            </div>
        </form>

        <hr>

<script> */

/*

// appel JQ

$(function () {



    //Récupération des valeurs de l'internaute :

    const pseudo = $('#pseudo');

    const email = $('#email');

    const pwd = $('#pwd');

    const select = $('#select');



    $('#contactForm .alert-danger').remove();



    $('#contactForm').on('submit', function (e) {

        e.preventDefault();



        // Validation des champs "input"

        if (pseudo.val() === '' || email.val() === '' || pwd.val() === '' || select === 'Pays'){

            $(this).prepend(`

            <div class="alert alert-danger">Erreur</div>

            `)

        }else{

            $(this).replaceWith(`

            <div class="alert alert-success"> Bienvenue </div>

            `)

        }


    }); //fin  $('#contactForm').on('submit',function(e)


}); //fin $(function()

 */
