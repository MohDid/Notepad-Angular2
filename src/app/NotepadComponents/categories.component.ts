import { Component } from '@angular/core';

@Component({
  selector: 'categories',
  template: `
    <div>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Editer</th>
          <th>Supprimer</th>
        <tr>
      </thead>
      <tbody>
        <tr *ngFor='let category of categories'>
          <td>{{category.id}}</td>
          <td>{{category.name}}</td>
          <td><button id='btnEdit' (click)='catEdit(category.id)'>Modifier</button></td>
          <td><button id='btnDel' (click)='catDelete(category.id)'>Supprimer</button></td>
        </tr>
      </tbody>
    </div>
  <div class="Content">

  </div>
  `,
})
export class CategoriesComponent  {
  categories: category[];

  constructor(){
    console.log('Constructeur note appelé');
    this.categories = [{
        id:'1',
        name: 'Test'
    },
    {
        id:'2',
        name: 'Cuisine'
    }]
  }

  catEdit(i: any){
    console.log('Catégorie ' + i + ' à modifier');
  }

  catDelete(i: any){
    console.log('Catégorie ' + i + ' à supprimer');
  }
}
interface category {
  id:string;
  name:string;
}
