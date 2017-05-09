import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent }  from './NotepadComponents/user.component';
import { NotesComponent }  from './NotepadComponents/notes.component';
import { CategoriesComponent }  from './NotepadComponents/categories.component';
import { AddNoteComponent }  from './NotepadComponents/addnote.component';
import { AddCategoryComponent }  from './NotepadComponents/addcategory.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UserComponent, NotesComponent, CategoriesComponent, AddNoteComponent, AddCategoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
