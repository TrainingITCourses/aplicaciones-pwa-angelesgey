import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Global, globalInitialState } from './models/global.model';
import { BehaviorSubject } from 'rxjs';
import { Launch } from './models/launch';
import { Agency } from './models/agency';
import { Mission } from './models/mission';
import { Status } from './models/status';
import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  //Se inicializa la variable estado
  private state: Global = {...globalInitialState};
  //Se crean los subjects de cada parte del estado para permitir subcripciones a sus cambios
  private launches$ = new BehaviorSubject<any>(this.state.launches);
  private launchStatuses$ = new BehaviorSubject<any>(this.state.launchStatuses);
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private missionTypes$ = new BehaviorSubject<any>(this.state.missionTypes);

  constructor() { }

/**
 * Devuelve observables para subscribirse a los cambios de alguna de las partes del estado.
 * Al subscribirse recibira una notificacion y la copia de la parte del estado enviada con
 * el metodo dispatch
 */
  public select$ = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return this.launches$.asObservable();
      case GlobalSlideTypes.launchStatuses:
        return this.launchStatuses$.asObservable();
      case GlobalSlideTypes.agencies:
        return this.agencies$.asObservable();
      case GlobalSlideTypes.missionTypes:
        return this.missionTypes$.asObservable();
    }
  };

/**
 * Devuelve una copia de la parte del estado que se solicita.
 * Se envia una copia para evitar enviar un puntero a la parte estado del store
 */
  public getSnapShot = (slice: GlobalSlideTypes) => {
    switch (slice) {
      case GlobalSlideTypes.launches:
        return [...this.state.launches]
      case GlobalSlideTypes.launchStatuses:
        return [...this.state.launchStatuses]
      case GlobalSlideTypes.agencies:
        return [...this.state.agencies]
      case GlobalSlideTypes.missionTypes:
        return [...this.state.missionTypes]
    }
  };

  public dispatch = (action: GlobalActions) => {
    // Realizados la accion con el reducer y actualizamos el estado
    this.state = globalStoreReducer(this.state, action);
    // Notificamos que el estado ha cambiado enviando una copia de la parte del estado que corresponde
    switch (action.type) {
      case GlobalActionTypes.LoadLaunches:
        this.launches$.next([...this.state.launches]);
        break;
      case GlobalActionTypes.LoadLaunchStatuses:
        this.launchStatuses$.next([...this.state.launchStatuses]);
        break;
      case GlobalActionTypes.LoadAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case GlobalActionTypes.LoadMissionTypes:
        this.missionTypes$.next([...this.state.missionTypes]);
        break;
    }
  }
  
}

export enum GlobalSlideTypes {
  launches = 'launches',
  launchStatuses = 'launchStatuses',
  agencies = 'agencies',
  missionTypes = 'missionTypes'
}
