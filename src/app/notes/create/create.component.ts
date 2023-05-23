import { Component, OnInit } from '@angular/core';
import { AppStateNote } from '../../common/models/app-state.interface';
import { Store } from '@ngrx/store';
import * as NoteActions from '../../common/actions/note.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppStateNote>) {}

  addNote(title:string, value:string) {
    this.store.dispatch(new NoteActions.AddNote({title: title, value: value}) )
  }

  ngOnInit() {}
}
