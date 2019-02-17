import { Action } from '@ngrx/store';
import { StatusActions, StatusActionTypes } from './status.actions';


export interface StatusState {
  statuses: any[],
  loading: boolean
}

export const initialState: StatusState = {
  statuses: [],
  loading: false
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
      return {...state, loading: true}
    case StatusActionTypes.StatusesLoaded:
      return {loading: false, statuses: action.payload}
    default:
      return state;
  }
}
