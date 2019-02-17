import { Action } from '@ngrx/store';
import { MissionActions, MissionActionTypes } from './mission.actions';


export interface MissionState {
  missions: any[],
  loading: boolean
}

export const initialState: MissionState = {
  missions: [],
  loading: false
};

export function reducer(state = initialState, action: MissionActions): MissionState {
  switch (action.type) {
    case MissionActionTypes.LoadMissions:
      return {...state, loading: true}
    case MissionActionTypes.MissionsLoaded:
      return {loading: false, missions: action.payload}
    default:
      return state;
  }
}
