import { Component } from '@angular/core';

@Component({
  selector: 'addnote',
  template: `

  <div class="Content">
        <h3>Ajout d'une note</h3><br />
        Titre <input id='title' type='text' value='Titre'/><br />
        Catégorie <input type='choice'/>   Date <input type='textarea'/><br /><br />
        Contenu <input type='textarea'/><br />
        <button name='btnSave' (click)='SaveNote()'>Sauvegarder</button>
  </div>
  `,
})
export class AddNoteComponent  {

  constructor(){
    console.log('Constructeur note appelé');
  }

  SaveNote(){
    console.log('Sauvegarde appelé');
  }
}
