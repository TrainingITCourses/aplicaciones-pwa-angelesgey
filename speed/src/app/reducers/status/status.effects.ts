import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { mergeMap } from 'rxjs/operators';
import { StatusActionTypes, StatusesLoaded } from './status.actions';
import { of } from 'rxjs';



@Injectable()
export class StatusEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(StatusActionTypes.LoadStatuses),
    mergeMap( () => {
      const statuses = this.dataService.getLaunchStatuses();
      return of(new StatusesLoaded(statuses));
    })

  )


  constructor(private actions$: Actions, private dataService: DataService) {}

}
