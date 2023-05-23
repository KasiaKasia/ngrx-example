import * as NoteActions from '../actions/note.actions'
import { Note } from '../models/app-state.interface';

const initialState: Note = {
    title: 'test note',
    value: 'test text'
}

export function reducer(state: Note[] = [initialState], action: any) {

    switch (action.type) {
        case NoteActions.ADD_NOTE:
            return [...state, action.payload];
        case NoteActions.REMOVE_NOTE:
            const copyArray = [...state];
            copyArray.splice(action.payload, 1)
            return copyArray;
        default:
            return state;
    }
}