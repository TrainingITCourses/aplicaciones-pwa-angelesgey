import { Injectable } from '@angular/core';
import LaunchesJson from '../assets/data/launches.json';
import LaunchStatusJson from '../assets/data/launchstatus.json';
import AgenciesJson from '../assets/data/agencies.json';
import MissionTypesJson from '../assets/data/missiontypes.json';
import { GlobalStoreService } from './store/global-store.service';
import { Launch } from './store/models/launch';
import { Agency } from './store/models/agency';
import { Mission } from './store/models/mission';
import { Status } from './store/models/status';
import { LoadLaunches, LoadLaunchStatuses, LoadAgencies, LoadMissionTypes } from './store/global-store.actions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private launchesKey = 'launches';
  private launchStatusesKey = 'launchStatuses';
  private agenciesKey = 'agencies';
  private missionTypesKey = 'missionTypes';

  constructor(private globalStore : GlobalStoreService) { }

  /* 
   * Obtiene los launches del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadLaunches con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getLaunches = () => {
    const localLaunches = localStorage.getItem(this.launchesKey);
    if(localLaunches) {
      //this.globalStore.dispatch(new LoadLaunches(JSON.parse(localLaunches)));
      return JSON.parse(localLaunches);
    } else {
      const launches = LaunchesJson.launches;
      localStorage.setItem(this.launchesKey, JSON.stringify(launches));
      //this.globalStore.dispatch(new LoadLaunches(launches));
      return launches;
    }
  }

  /* 
   * Obtiene los statuses del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadLaunchStatuses con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getLaunchStatuses = () => {
    const localLaunchStatuses = localStorage.getItem(this.launchStatusesKey);
    console.log("localLaunchStatuses " + localLaunchStatuses);
    if(localLaunchStatuses) {
      //this.globalStore.dispatch(new LoadLaunchStatuses(JSON.parse(localLaunchStatuses)));
      return JSON.parse(localLaunchStatuses);
    } else {
      const launchStatuses = LaunchStatusJson.types;
      localStorage.setItem(this.launchStatusesKey, JSON.stringify(launchStatuses));
      //this.globalStore.dispatch(new LoadLaunchStatuses(launchStatuses));
      return launchStatuses;
    }
  }

  /* 
   * Obtiene las agencies del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadAgencies con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getAgencies = () => {
    const localAgencies = localStorage.getItem(this.agenciesKey);
    console.log("localAgencies " + localAgencies);
    if(localAgencies) {
      //this.globalStore.dispatch(new LoadAgencies(JSON.parse(localAgencies)));
      return JSON.parse(localAgencies);
    } else {
      const agencies = AgenciesJson.agencies;
      localStorage.setItem(this.agenciesKey, JSON.stringify(agencies));
      //this.globalStore.dispatch(new LoadAgencies(agencies));
      return agencies;
    }
  }

  /* 
   * Obtiene las missions del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadMissionTypes con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getMissionTypes = () => {
    const localMissionTypes = localStorage.getItem(this.missionTypesKey);
    console.log("localMissionTypes " + localMissionTypes);
    if(localMissionTypes) {
      //this.globalStore.dispatch(new LoadMissionTypes(JSON.parse(localMissionTypes)));
      return JSON.parse(localMissionTypes);
    } else {
      const missions = MissionTypesJson.types;
      localStorage.setItem(this.missionTypesKey, JSON.stringify(missions));
      //this.globalStore.dispatch(new LoadMissionTypes(missions));
      return missions;
    }
  }
}
