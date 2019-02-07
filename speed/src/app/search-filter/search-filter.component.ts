import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Status } from '../store/models/status';
import { Agency } from '../store/models/agency';
import { Mission } from '../store/models/mission';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  @Input() public statuses: Status[];
  @Input() public missions: Mission[];
  @Input() public agencies: Agency[];

  @Output() public search = new EventEmitter();

  selectedValueStatus: Status;
  selectedValueMission: Mission;
  selectedValueAgency: Agency;

  constructor() { }
  
  ngOnInit() {
  }

  public searchCriteria() {
    
    console.log("Selected Status:" + (this.selectedValueStatus? this.selectedValueStatus.name : "none") + 
      " - Mission: " + (this.selectedValueMission ? this.selectedValueMission.name : "none") + 
      " - Agency: " + (this.selectedValueAgency ? this.selectedValueAgency.name : "none"));

    this.search.emit({statusFilter: this.selectedValueStatus, 
                      agencyFilter: this.selectedValueAgency, 
                      missionFilter: this.selectedValueMission});
    
  }

}
