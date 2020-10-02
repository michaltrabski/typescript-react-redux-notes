import { createStore } from "redux";
import { Action } from "./actions";

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: ["This is your first note..."],
};

const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    default:
      return state;
  }
};

export const store = createStore(notesReducer);
