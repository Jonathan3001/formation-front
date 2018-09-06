import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  nouveauContact: Contact = new Contact();
  @Output() unContactEstCree = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Fonction appelée après le submit du formulaire
  exportContact() {
    // Lorsque mon formulaire est soumis, j'émet un évènement qui sera écouté par mon application
    // et qui récupérera les données du nouveau contact.
    console.log(this.nouveauContact);

    this.unContactEstCree.emit(this.nouveauContact);

    // -- On réinitialise le contact
    this.nouveauContact = new Contact();
  }
}
