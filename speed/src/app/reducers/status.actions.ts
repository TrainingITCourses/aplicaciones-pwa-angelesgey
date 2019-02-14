import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatuss = '[Status] Load Statuss',
  
  
}

export class LoadStatuss implements Action {
  readonly type = StatusActionTypes.LoadStatuss;
}


export type StatusActions = LoadStatuss;
