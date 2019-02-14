import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch.reducer';
import * as fromStatus from './status.reducer';
import * as fromMission from './mission.reducer';
import * as fromAgency from './agency.reducer';

export interface State {

  launch: fromLaunch.State;
  status: fromStatus.State;
  mission: fromMission.State;
  agency: fromAgency.State;
}

export const reducers: ActionReducerMap<State> = {

  launch: fromLaunch.reducer,
  status: fromStatus.reducer,
  mission: fromMission.reducer,
  agency: fromAgency.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
