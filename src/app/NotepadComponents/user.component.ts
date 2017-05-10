import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <div class="col-md-10 col-md-offset-1 text-center">
    <h1>Welcome to {{name}}</h1>
      <ul class="list-inline" *ngFor="let option of menu; let i=index" (click)="OptionClicked(i)">
          <li><a href="#">{{option}}</a></li>
      </ul>
  </div>
  <div class="Content" [ngSwitch]="optClicked">
      <div *ngSwitchCase="0">
        <notes></notes>
      </div>
      <div *ngSwitchCase="1">
        <categories></categories>
      </div>
      <div *ngSwitchCase="2">
        <addnote></addnote>
      </div>
      <div *ngSwitchCase="3">
        <addcategory></addcategory>
      </div>
      <div *ngSwitchCase="4">
        <about></about>
      </div>
    <!--
      <ng-container *ngSwitchCase="3">
      <h4>Ajouter une categorie</h4>
      <p>a été cliqué</p>
      </ng-container>
    -->
    <div *ngSwitchDefault><notes></notes></div>
  </div>
  `,
})
export class UserComponent  {
  name: string;
  menu: string[];
  optClicked: string;

  constructor(){
    this.name='Notepad';
      console.log('Constructeur appelé');
    this.menu = ['Notes','Catégories','Ajouter une note','Ajouter une categorie','About'];
  }
  OptionClicked(i: any){
    this.optClicked=i;
    console.log('L\'option Menu cliquée: ' + i );
  }
}
