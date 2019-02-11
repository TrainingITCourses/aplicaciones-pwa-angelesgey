import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Launch } from '../store/models/launch';
import { Agency } from '../store/models/agency';
import { Mission } from '../store/models/mission';
import { Status } from '../store/models/status';
import { GlobalStoreService, GlobalSlideTypes } from '../store/global-store.service';

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

  constructor(private global : GlobalStoreService, private dataService: DataService) { }

  ngOnInit() {  
    // se cargan los filtros de busqueda
    this.loadData();   
    // se subscribe a los cambios en las listas
    this.observeLaunchesLists();
    
  }

  private loadData() {
    this.dataService.getLaunches();
    this.dataService.getLaunchStatuses();
    this.dataService.getAgencies();
    this.dataService.getMissionTypes();
    this.launchesResult = this.global.getSnapShot(GlobalSlideTypes.launches);
  }

  private observeLaunchesLists() {
    this.global
      .select$(GlobalSlideTypes.launches)
      .subscribe(launches => (this.launches = launches));
    this.global
      .select$(GlobalSlideTypes.launchStatuses)
      .subscribe(statuses => (this.launchStatus = statuses));
    this.global
      .select$(GlobalSlideTypes.agencies)
      .subscribe(agencies => (this.agencies = agencies));
    this.global
      .select$(GlobalSlideTypes.missionTypes)
      .subscribe(missionTypes => (this.missionTypes = missionTypes));
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
