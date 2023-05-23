import { createAction, props } from '@ngrx/store';

export const id = createAction(
  '[App Component] Id',
  props<{ taskId: number }>()
);

export const name = createAction(
  '[App Component] Name',
  props<{ taskName: string }>()
);