import { Component, OnInit } from '@angular/core';
import { Launch } from '../store/models/launch';
import { Agency } from '../store/models/agency';
import { Mission } from '../store/models/mission';
import { Status } from '../store/models/status';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadLaunches } from '../reducers/launch/launch.actions';
import { LoadMissions } from '../reducers/mission/mission.actions';
import { LoadAgencies } from '../reducers/agency/agency.actions';
import { LoadStatuses } from '../reducers/status/status.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
  public launches: Launch[];
  public agencies: Agency[];
  public missionTypes: Mission[];
  public launchStatus: Status[];
  public launchesResult: Launch[];
  //public launches: LaunchState;

  constructor(private store: Store<State>) { }

  ngOnInit() {  
    // se subscribe a los cambios en las listas
    this.observeLaunchesLists();
    // se cargan los filtros de busqueda
    this.loadData();       
  }

  private loadData() {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadMissions());
    this.store.dispatch(new LoadAgencies());
  }

  private observeLaunchesLists() {
    this.store.select('launch').subscribe(launchState => {
      this.launches = launchState.launches;
      this.launchesResult = launchState.launches;      
    });
    this.store.select('mission').subscribe(missionState => this.missionTypes = missionState.missions);
    this.store.select('status').subscribe(statusState => this.launchStatus = statusState.statuses);
    this.store.select('agency').subscribe(agenciesState => this.agencies = agenciesState.agencies);
  }

  onSearch = (p) => {
    console.log("Search by Status:" + (p.statusFilter? p.statusFilter.name : "none") + 
      " - Mission: " + (p.missionFilter ? p.missionFilter.name : "none") + 
      " - Agency: " + (p.agencyFilter ? p.agencyFilter.name : "none"));
    
    this.launchesResult = this.launches;

    if(p.statusFilter != undefined) {
      this.launchesResult = this.searchByStatus(p.statusFilter, this.launchesResult);
    }
    if(p.missionFilter != undefined) {
      this.launchesResult = this.searchByMission(p.missionFilter, this.launchesResult);
    }

    if(p.agencyFilter != undefined) {
      this.launchesResult = this.searchByAgency(p.agencyFilter, this.launchesResult);
    }

  };

  searchByStatus = (statusFilter, array) => {
    return array.filter(
          launch => launch.status === statusFilter.id );
  };

  searchByMission = (missionFilter, array) => {
    return array.filter(
        launch => {
          return launch.missions.some(mission => (mission.id === missionFilter.id))
        }        
    )
  };

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
  };
  
}
