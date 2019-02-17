import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches loaded',
  SearchLaunches = '[Launch] Search Launches'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;  
  constructor(readonly payload: any[]) {}
}

export class SearchLaunches implements Action {
  readonly type = LaunchActionTypes.SearchLaunches;  
  constructor(readonly payload: any[]) {}
}


export type LaunchActions = LoadLaunches | LaunchesLoaded | SearchLaunches;
