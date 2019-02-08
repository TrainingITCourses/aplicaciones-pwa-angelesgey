export interface Action {
  readonly type: GlobalActionTypes;
  readonly payload: any;
}

export enum GlobalActionTypes {
  LoadLaunches = '[Global] LoadLaunches',
  LoadLaunchStatuses = '[Global] LoadLaunchStatuses',
  LoadAgencies = '[Global] LoadAgencies',
  LoadMissionTypes = '[Global] LoadMissionTypes'
}

export class LoadLaunches implements Action {
  public readonly type = GlobalActionTypes.LoadLaunches;
  constructor(public readonly payload: any[]) {}
}

export class LoadLaunchStatuses implements Action {
  public readonly type = GlobalActionTypes.LoadLaunchStatuses;
  constructor(public readonly payload: any[]) {}
}

export class LoadAgencies implements Action {
  public readonly type = GlobalActionTypes.LoadAgencies;
  constructor(public readonly payload: any[]) {}
}

export class LoadMissionTypes implements Action {
  public readonly type = GlobalActionTypes.LoadMissionTypes;
  constructor(public readonly payload: any[]) {}
}

export type GlobalActions = LoadLaunches | LoadLaunchStatuses | LoadAgencies | LoadMissionTypes;