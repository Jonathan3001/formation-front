/* ----- Les Selecteurs d'Enfants jQuery */

$(function(){

    l = e => console.log(e);

    // -- Je souhaite selectionner toutes les div de ma page

    l($('div'));

    // -- Je souhaite selectionner la nav de ma page

    l($('#menu'));

    // -- En partant du menu, je souhaite, tous les éléments descendants direct (enfants) qui sont dans ma nav

    l($('#menu').children());

    // -- Parmi ces descendants, uniquement l'élément ul
    l($('#menu').children("ul"));

    // -- En partant du "ul", je souhaite récupérer tous les éléments "li"
    l($('#menu').children("ul").find("li"));
    l($('#menu').find("li"));

    // -- Je souhaite récupérer UNIQUEMENT le 2ème "li"

    l($('#menu').find("li").eq(1));

    // --Je souhaite connaitre le voisin immédiat de mon "menu"

    l($('#menu').next());
    l($('#menu').next().next()); // Le voisin du voisin
    l($('#menu').prev()); // Le voisin d'avant

    l($('#menu').parent()); // Les parents

});

