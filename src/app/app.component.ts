import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { name, id } from './common/actions/task.actions';
import { AppStateTask } from './common/models/app-state.interface';
import { Observable } from 'rxjs';
import { getTaskId } from './common/selector/task.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  taskForm: FormGroup; 
  counter$: Observable<number>
  constructor(nameForm: FormBuilder, private store: Store<AppStateTask>) {
 this.counter$ = this.store.select(getTaskId)
    this.taskForm = nameForm.group({
      taskId:[1],
      taskName: ['']
    });
  }
 
  save(): void {
    
    this.store.dispatch(id({ taskId: this.taskForm.get('taskId')?.value + 1 }));
    this.store.dispatch(name({ taskName: this.taskForm.get('taskName')?.value }));
    
    if( this.taskForm.get('taskId')?.value  ) {
  
      this.taskForm.controls['taskId'].setValue(this.taskForm.get('taskId')?.value + 1 )
      this.taskForm.controls['taskName'].reset()
    } 
  }
}
