//Composant de routage
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { NoteFormComponent }  from './NotepadComponents/noteform.component';
import { FormValidationComponent }  from './NotepadComponents/formvalidation.component';

import { UserComponent }  from './NotepadComponents/user.component';
import { NotesComponent }  from './NotepadComponents/notes.component';
import { CategoriesComponent }  from './NotepadComponents/categories.component';
import { AddNoteComponent }  from './NotepadComponents/addnote.component';
import { AddCategoryComponent }  from './NotepadComponents/addcategory.component';
import { AboutComponent }  from './NotepadComponents/about.component';
import { ErrorComponent }  from './NotepadComponents/error.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    NotesComponent,
    CategoriesComponent,
    AddNoteComponent,
    AddCategoryComponent,
    AboutComponent,
    ErrorComponent,

    NoteFormComponent,
    FormValidationComponent
  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
