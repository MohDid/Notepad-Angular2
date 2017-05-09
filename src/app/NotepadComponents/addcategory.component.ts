import { Component } from '@angular/core';

@Component({
  selector: 'addcategory',
  template: `

  <div class="Content">
        <h3>Ajout d'une catégorie</h3><br />
        Catégorie <input type='textarea'/><br />
        <button name='btnSave' (click)='SaveCategory()'>Sauvegarder</button>
  </div>
  `,
})
export class AddCategoryComponent  {

  constructor(){
    console.log('Constructeur note appelé');
  }

  SaveCategory(){
    console.log('Sauvegarde appelé');
  }
}
