import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { mergeMap, map } from 'rxjs/operators';
import { AgencyActionTypes, AgenciesLoaded } from './agency.actions';



@Injectable()
export class AgencyEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(AgencyActionTypes.LoadAgencies),
    mergeMap( () => 
      this.dataService
        .getAgencies$()
        .pipe(map(agencies => new AgenciesLoaded(agencies)))
    )

  
  )


  constructor(private actions$: Actions, private dataService: DataService) {}

}
