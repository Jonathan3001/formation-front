/*
    CONSIGNE :

Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.

---------

    ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

---------

    ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.

---------

    ETAPE 3 :

Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour[Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.

---------

    ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.

En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant:

A.L'ajout de l'utilisateur dans le tableau.
    B.L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.

Ex.Merci Hugo! Tu es maintenant inscrit.
Voici la liste de nos Membres:

Hugo: 26ans
Rodrigue: 56ans
          ...

NB: Devra bien entendu s'afficher le membre qui vient de s'inscrire.

    */


// -- Etape 1
var inputPseudo = document.getElementById('pseudo');

function check () {
    let userInArray = true;
    for(i = 0; i <= membres.length; i++){
        console.log(membres[i]);
        if(inputPseudo === membres[i].pseudo) {
            userInArray = false;
        }        
    }
};


// -- Etape 2


// -- Etape 3


// -- Etape 4