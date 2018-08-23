// BENCHMARK - BOUCLES JS

// http://jsbench.github.io/#6bdfcd2692ba80c16a68c88554281570

/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.​

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.    

    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc    

    **** Vous allez créez au minimum 5 étudiants ****​

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale.*/


// 1 - Creation du tableau
var PremierTrimestre = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        moyenne:{
            francais: 12,
            math: 19,
            physique:4,
            chimie: 9,
            anglais: 13
        }
    },
    {
        prenom: 'Jonathan',
        nom: 'BOURDARIAS',
        moyenne:{
            philosophie: 16,
            francais: 7,
            sport: 17,
            math: 16,
            anglais: 12,
            droit: 11,
            japonais: 9
        }
    },
    {
        prenom: 'Marcel',
        nom: 'PATOULACCI',
        moyenne:{
            francais: 15,
            anglais: 6,
            economie: 12,
            gestion: 8,
            math: 10,
            espagnol: 18
        }
    },
    {
        prenom: 'Michel',
        nom: 'COURTEMANCHE',
        moyenne:{
            francais: 9,
            math: 12,
            economie: 16,
            italien: 13,
            theatre: 19,
            histoire: 12
        }
    },
    {
        prenom: 'Mac',
        nom: 'INTOCH',
        moyenne:{
            anglais: 17,
            economie: 13,
            physique: 14,
            math: 16,
            philosophie: 7
        }
    },
];
console.log(PremierTrimestre);

// 2 - Afficher la moyenne de toutes les matières pour chaque etudiant, puis calculer leurs moyenne générale

document.write("<ol>");
for (var i = 0; i <= PremierTrimestre.length; i++){
    document.write("<li>" + PremierTrimestre[i].prenom + " " + PremierTrimestre[i].nom + "</li>");

    for (matiere in PremierTrimestre[i].moyenne){
        document.write("<ul>" + matiere + "</ul>");
        console.log(matiere);

        // for (note in matiere[i].moyenne.length);
        // document.write("<ul>" + moyenne.length + "</ul>");
        // console.log(moyenne.length);
    }
}
document.write("</ol>");