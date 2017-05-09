import { Component } from '@angular/core';

@Component({
  selector: 'notes',
  template: `
    <div *ngFor='let note of notes'>
        <h3>{{note.title}}</h3>
        <p>{{note.content}}</p><br />
    </div>
  <div class="Content">

  </div>
  `,
})
export class NotesComponent  {
  notes: note[];

  constructor(){
    console.log('Constructeur note appelé');
    this.notes = [{
        title: 'Premiere Note',
        content: 'abcd efgh ijkl Mnop qrst.',
        date:'2017-05-08',
        category:'test'
    },
    {
        title: 'Deuxieme Note',
        content: 'abcd 2 efgh ijkl Mnop qrst.',
        date:'2017-05-09',
        category:'test2'
    }]
  }

}
interface note {
  title:string;
  content:string;
  date:string;
  category:string;
}
