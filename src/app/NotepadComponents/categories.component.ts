import { Component } from '@angular/core';
import { Category } from './category';
import { DataService } from './data.service';

@Component({
  selector: 'categories',
  template: `
  <div class="col-md-10 col-md-offset-1">
    <table class="table">
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
          <td><a href="#" class="btn btn-primary glyphicon glyphicon-edit" id='btnEdit' (click)='catEdit(category.id)'>Modifier</a></td>
          <td><a href="#" class="btn btn-danger glyphicon glyphicon-remove" id='btnDel' (click)='catDelete(category.id)'>Supprimer</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  providers: [ DataService ]
})
export class CategoriesComponent  {
  categories: Category[];

  constructor(private _dataService:DataService){
    console.log('Constructeur note appelé');
    this.categories = this._dataService.getCategories();
  }

  catEdit(i: any){
    console.log('Catégorie ' + i + ' à modifier');
  }

  catDelete(i: any){
    console.log('Catégorie ' + i + ' à supprimer');
  }
}
