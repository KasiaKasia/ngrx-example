import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { taskReducer } from './common/reducer/task.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';
import { reducer } from './common/reducer/note.reducer';
import { CreateComponent } from './notes/create/create.component';
import { ReadComponent } from './notes/read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      taskId: taskReducer,
      taskName: taskReducer,
      note: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
