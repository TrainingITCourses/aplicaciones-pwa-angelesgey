import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromMission from './mission/mission.reducer';
import * as fromAgency from './agency/agency.reducer';

export interface State {

  launch: fromLaunch.LaunchesState;
  status: fromStatus.StatusState;
  mission: fromMission.MissionState;
  agency: fromAgency.AgenciesState;
}

export const reducers: ActionReducerMap<State> = {

  launch: fromLaunch.reducer,
  status: fromStatus.reducer,
  mission: fromMission.reducer,
  agency: fromAgency.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
