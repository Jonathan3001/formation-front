// -- Déclarer un tableau indexé
var monTableau = [];
var MyArray = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Jonathan";
monTableau[2] = "Elies";
monTableau[3] = "Layla";

console.log(monTableau); // Affiche toutes les données du tableau
console.log(monTableau[1]);
console.log(monTableau[3]);

var nosPrenoms = [
    "Luc", 
    "Sabuj", 
    "Jean-Philippe", 
    "Alpha", 
    "Kévin"];

console.log(nosPrenoms)

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGARD",
    age    : 28
};

console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

var annuaireDesApprenants = [
    ["Hugo", "LIEGARD", "0783 97 15 15"],
    ["Luc", "JOINVIL", "XXXX XX XX XX"],
    {
        prenom: "Arnaud",
        nom: "DOHOU",
        tel: "XXXX XX XX XX"
    },
    {
        prenom: "Momo",
        nom: "AIDOUNI",
        tel: "XXXX XX XX XX"
    },
];

console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants [1] [0]);
console.log(annuaireDesApprenants [1] [1]);
// Ce n'est pas très pratique !

console.log(annuaireDesApprenants [2].prenom);
console.log(annuaireDesApprenants [2].nom);


var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "35 Rue Jules Michelet",
                cp: "92700",
                ville: "Colombes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "rodrigue@hl-media.fr",
            tel: {
                fixe: "0596 145 569",
                fax: "0596 896 452",
                port: "0696 07 04 34"
            },
            adresse: {
                rue: "Quartier Sainte-Thérèse",
                cp: "97200",
                ville: "Fort-de-France",
                pays: {
                    code: "MQ",
                    nom: "Martinique"
                }
            }
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        coordonnees: {
            email: "elies.k@hl-media.fr",
            tel: {
                fixe: "",
                fax: "",
                port: "07 89 45 12 56"
            },
            adresse: {
                rue: "Au Paradis",
                cp: "77777",
                ville: "Eden Ville",
                pays: {
                    code: "PA",
                    nom: "3ème Ciel"
                }
            }
        }
    }
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

/* Consigne
Réaliser un structure JSON permettant de stocker des recettes de cuisine. */

var recettes = [
    {
        nom: "Fraises à la crème fouetée",
        ingredients: {
            ingredientUn: "fraises",
            ingedientDeux: "crème légère fouetée",
            ingredientTrois: "sucre",
            ingredientQuatre: "biscuit à la cuillère",
            ingredientCinq: "jus d'orange",
            ingredientSix: "feuilles de menthe"
        },
        quantite: {
            un: "500g",
            deux: "1 bombe",
            trois: "80g",
            quatre: "8 biscuits",
            cinq: "4 cuillères à soupe",
            six: "6 feuilles"
        },
        temps: "0 minutes",
        difficulte: "Très facile",
        coût: "Moyen"
    },
    {
        nom: "Pâte à crèpes sans repos",
        ingredients:{

        }
    },
];

// Correction

var receipes = [
    {
        name: 'Tiramisu',
        category: 'Desserts',
        subCategory: 'Gateaux',
        price: 'Abordable',
        difficulty: 'Facile',
        plate: 8,
        starRating: 4.98462123,
        photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://www.monlien.fr/verslavideo.mp4', cooking: {
            preparation: '30min',
            time: '',
            temp: ''
        },
        ingredients: [
            {
                name: 'Sucre',
                quantity: 80,
                unit: 'g',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Café Expresso',
                quantity: 15,
                unit: 'cl',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Chocolat Cacao Amer',
                quantity: '1',
                unit: 'cuillère à soupe',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Canelle',
                quantity: '1',
                unit: 'pincée',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            }
        ],
        instructions: [
            {
                name: 'Séparer les blancs des jaunes d\'oeufs.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Mélanger les jaunes avec le sucre roux et le sucre vanillé.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Ajouter le mascarpone au fouet.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            }
        ]
    },
    {
        name: 'Pâte à crèpes sans repos',
        category: 'Desserts',
        subCategory: 'Crèpe',
        price: 'Abordable',
        difficulty: 'Facile',
        plate: 4,
        starRating: 4.6,
        photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://www.monlien.fr/verslavideo.mp4', 
        cooking: {
            preparation: '10min',
            time: '5min',
            temp: ''
        },
        ingredients: [
            {
                name: 'Farine fluide',
                quantity: 200,
                unit: 'g',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Oeufs',
                quantity: 2,
                unit: 'oeufs',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Lait',
                quantity: '40',
                unit: 'cl',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Huile',
                quantity: '1',
                unit: 'cuillère à soupe',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Sel',
                quantity: '1',
                unit: 'grosse pincée',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            }
        ],
        instructions: [
            {
                name: 'Séparer les blancs des jaunes d\'oeufs.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Mélanger les jaunes avec le sucre roux et le sucre vanillé.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Ajouter le mascarpone au fouet.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            }
        ]
    },
];

/* ----- AJOUTER UN ELEMENT ----- */

var Couleurs = ["Rouge", "Jaune", "Vert"];

console.log(Couleurs);

// La fonction .push me permet d'ajouter un élément à la fin de mon tableau.
Couleurs.push('Orange');
console.log(Couleurs);

// La fonction .unshift le rajoute au début.
Couleurs.unshift('Bleu');
console.log(Couleurs);

/* ----- RECUPERER ET SORTIR LE DERNIER ELEMENT -----
 */

 /* La fonction pop() me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récuperer la valeur. */

 var monDernierElement = Couleurs.pop();
 console.log(Couleurs);
 console.log(monDernierElement);

 /* La même chose est possible avec le premier élément en utilisant la fonction shift().*/

 
 /* La fonction splice() vous permet de faire sortir un ou plusieurs éléments */