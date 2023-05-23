import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateTask } from '../common/models/app-state.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  taskId$: Observable<number>;
  taskName$: Observable<string>;

  constructor(private store: Store<AppStateTask>) {
    this.taskId$ = store.select('taskId');
    this.taskName$ = store.select('taskName');
  }
}
