import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input() public launches: any[];

  constructor() { }

  ngOnInit() {
  }

  getCount() {
    console.log("numero de resultados " + this.launches.length);
    return this.launches.length;
  }

}
