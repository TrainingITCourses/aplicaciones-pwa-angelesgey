import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { mergeMap } from 'rxjs/operators';
import { AgencyActionTypes, AgenciesLoaded } from './agency.actions';
import { of } from 'rxjs';




@Injectable()
export class AgencyEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(AgencyActionTypes.LoadAgencies),
    mergeMap( () => {
      const agencies = this.dataService.getAgencies();
      return of(new AgenciesLoaded(agencies))
    })

  
  )


  constructor(private actions$: Actions, private dataService: DataService) {}

}
