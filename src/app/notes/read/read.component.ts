import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateNote, Note } from '../../common/models/app-state.interface';
import { Store } from '@ngrx/store';
import * as NoteActions from '../../common/actions/note.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
})
export class ReadComponent implements OnInit {

  notes: Observable<Note[]>;

  constructor(private store: Store<AppStateNote>) { 
    this.notes = store.select('note');
  }

  ngOnInit() {}
  delNote(index: number) {
     this.store.dispatch(new NoteActions.RemoveNote(index) )
  }
}
