import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MissionActionTypes, MissionsLoaded } from './mission.actions';
import { DataService } from 'src/app/data.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class MissionEffects {

  @Effect()
  public load$ = this.actions$.pipe(
      ofType(MissionActionTypes.LoadMissions),
      mergeMap( () => {
        const missions = this.dataService.getMissionTypes();
        return of(new MissionsLoaded(missions));
      })
    )

  constructor(private actions$: Actions, private dataService: DataService) {}

}
