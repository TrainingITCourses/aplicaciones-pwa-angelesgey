import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencys = '[Agency] Load Agencys',
  
  
}

export class LoadAgencys implements Action {
  readonly type = AgencyActionTypes.LoadAgencys;
}


export type AgencyActions = LoadAgencys;
