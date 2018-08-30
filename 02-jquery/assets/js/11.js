//  -- Déclarer un tableau indexé
const prenoms = ["Layla", "Jonathan","Arnaud", "Jhordan", "Elies"];
console.log(prenoms);
console.log(prenoms[3]);
console.log(prenoms[0]);

for(let i = 0; i < prenoms.length; i++){
    console.log(prenoms[i]);
};

var login = {
    nom : 'BOURDARIAS',
    prenom : 'Jonathan',
    adresse : '49, avenue du 18 juin 1940',
    tel : '06.60.51.50.84'
};
    console.log(login);
    console.log(login.nom + " " + login.prenom);

var contacts = [
    {
        nom : 'DURANT',
        prenom : 'Eric',

    },
    {
        nom : 'DUPONT',
        prenom : 'Marc',
    },
    {
        nom : 'VIGNEUX',
        prenom : 'Didier',
    }
];

// document.write('<ul>');
// for(let i = 0; i < contacts.length; i++){
//     document.write('<li>');
//         document.write(contacts[i].nom);
//     document.write('</li>');
// };
// document.write('</ul>');

// -- En utilisant document.createElement

var ul = document.createElement('ul');

for(let i = 0; i < contacts.length; i++){
    li = document.createElement('li');
    li.textContent = contacts[i].nom + ' ' + contacts[i].prenom;
    ul.appendChild(li);
};
document.body.appendChild(ul);