import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { mergeMap, map } from 'rxjs/operators';
import { StatusActionTypes, StatusesLoaded } from './status.actions';

@Injectable()
export class StatusEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(StatusActionTypes.LoadStatuses),
    mergeMap( () => 
      this.dataService
        .getLaunchStatuses$()
        .pipe(map(statuses => new StatusesLoaded(statuses))) 
    )

  )
  
  constructor(private actions$: Actions, private dataService: DataService) {}

}
