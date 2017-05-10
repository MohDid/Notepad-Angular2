import { Component } from '@angular/core';
import { DataService } from './data.service';

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
  providers: [DataService]
})
export class NotesComponent  {
  notes: note[];

  constructor(private _dataService: DataService){
    console.log('Constructeur note appelé');
    this.displayNotes();
  }
  displayNotes(){
    this.notes = this._dataService.getNotes();
    console.log('Notes :' + this.notes);
  }

}
interface note {
  title:string;
  content:string;
  date:string;
  category:string;
}
