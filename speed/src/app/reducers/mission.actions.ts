import { Action } from '@ngrx/store';

export enum MissionActionTypes {
  LoadMissions = '[Mission] Load Missions',
  
  
}

export class LoadMissions implements Action {
  readonly type = MissionActionTypes.LoadMissions;
}


export type MissionActions = LoadMissions;
