import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateTask } from "../models/app-state.interface";


export const getStateTaskId = createFeatureSelector<AppStateTask>('taskId'); 
export const getTaskId = createSelector(getStateTaskId, state => state.taskId)