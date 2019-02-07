import { Injectable } from '@angular/core';
import LaunchesJson from '../assets/data/launches.json';
import LaunchStatusJson from '../assets/data/launchstatus.json';
import AgenciesJson from '../assets/data/agencies.json';
import MissionTypesJson from '../assets/data/missiontypes.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public launches;
  public launchStatus;
  public agencies;
  public missionTypes;

  constructor() { 

    console.log('Reading local json files');
    console.log(LaunchesJson);
    this.launches = LaunchesJson.launches;
    this.launchStatus = LaunchStatusJson.types;
    this.agencies = AgenciesJson.agencies;
    this.missionTypes = MissionTypesJson.types;

  }

}
