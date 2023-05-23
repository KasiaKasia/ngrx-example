import { AppStateTask } from '../models/app-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { id, name } from '../actions/task.actions';

export const initialState: AppStateTask = {
    taskId: 0,
    taskName: ''
};

const addTaskReducer = createReducer(
    initialState,
    on(id, (state, { taskId }) => ({ ...state, taskId: state.taskId + 1 })),
    on(name, (state, { taskName }) => ({ ...state, taskName }))
);

export function taskReducer(state: AppStateTask, action: Action): any {
    return addTaskReducer(state, action);
}
