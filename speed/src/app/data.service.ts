import { Injectable } from '@angular/core';
import LaunchesJson from '../assets/data/launches.json';
import LaunchStatusJson from '../assets/data/launchstatus.json';
import AgenciesJson from '../assets/data/agencies.json';
import MissionTypesJson from '../assets/data/missiontypes.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private launchesKey = 'launches';
  private launchStatusesKey = 'launchStatuses';
  private agenciesKey = 'agencies';
  private missionTypesKey = 'missionTypes';

  constructor() { }

  /* 
   * Obtiene los launches del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadLaunches con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getLaunches = () => {
    const localLaunches = localStorage.getItem(this.launchesKey);
    if(localLaunches) {
      return JSON.parse(localLaunches);
    } else {
      const launches = LaunchesJson.launches;
      localStorage.setItem(this.launchesKey, JSON.stringify(launches));
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
      return JSON.parse(localLaunchStatuses);
    } else {
      const launchStatuses = LaunchStatusJson.types;
      localStorage.setItem(this.launchStatusesKey, JSON.stringify(launchStatuses));
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
      return JSON.parse(localAgencies);
    } else {
      const agencies = AgenciesJson.agencies;
      localStorage.setItem(this.agenciesKey, JSON.stringify(agencies));
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
      return JSON.parse(localMissionTypes);
    } else {
      const missions = MissionTypesJson.types;
      localStorage.setItem(this.missionTypesKey, JSON.stringify(missions));
      return missions;
    }
  }

  public search = (p) => {
    console.log("Search by Status:" + (p.statusFilter? p.statusFilter.name : "none") + 
      " - Mission: " + (p.missionFilter ? p.missionFilter.name : "none") + 
      " - Agency: " + (p.agencyFilter ? p.agencyFilter.name : "none"));
    
    let launchesResult = this.getLaunches();

    if(p.statusFilter != undefined) {
      launchesResult = this.searchByStatus(p.statusFilter, launchesResult);
    }
    if(p.missionFilter != undefined) {
      launchesResult = this.searchByMission(p.missionFilter, launchesResult);
    }

    if(p.agencyFilter != undefined) {
      launchesResult = this.searchByAgency(p.agencyFilter, launchesResult);
    }
    return launchesResult;

  }

  searchByStatus = (statusFilter, array) => {
    return array.filter(
          launch => launch.status === statusFilter.id );
  }

  searchByMission = (missionFilter, array) => {
    return array.filter(
        launch => {
          return launch.missions.some(mission => (mission.id === missionFilter.id))
        }        
    )
  }

  searchByAgency = (agencyFilter, array) => {
    return array.filter(
        launch => {
          return launch.missions.some(
            mission => (mission.agencies != undefined) && (mission.agencies.some(
              agency => agency.id === agencyFilter.id
            ))
          )
        }
    )
  }

}
