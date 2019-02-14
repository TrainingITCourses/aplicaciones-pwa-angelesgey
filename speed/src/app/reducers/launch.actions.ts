import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunchs = '[Launch] Load Launchs',
  
  
}

export class LoadLaunchs implements Action {
  readonly type = LaunchActionTypes.LoadLaunchs;
}


export type LaunchActions = LoadLaunchs;
