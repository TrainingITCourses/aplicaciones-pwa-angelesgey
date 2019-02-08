import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { Global, globalInitialState } from './models/global.model';

export function globalStoreReducer (state: Global = globalInitialState, action: GlobalActions): Global {
    /* Se crea una copia del estado recibido como parametro para poder modificarlo,
     * en reducer no se modifican los parametros */
    const stateResult = {...state};

    switch(action.type) {
        case GlobalActionTypes.LoadLaunches:
            stateResult.launches = action.payload;
            break;
        case GlobalActionTypes.LoadLaunchStatuses:
            stateResult.launchStatuses = action.payload;
            break;
        case GlobalActionTypes.LoadAgencies:
            stateResult.agencies = action.payload;
            break;
        case GlobalActionTypes.LoadMissionTypes:
            stateResult.missionTypes = action.payload;
            break;
    }
    return stateResult;    
}