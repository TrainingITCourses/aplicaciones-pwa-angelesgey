import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MissionActionTypes, MissionsLoaded } from './mission.actions';
import { DataService } from 'src/app/data.service';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class MissionEffects {

  @Effect()
  public load$ = this.actions$.pipe(
      ofType(MissionActionTypes.LoadMissions),
      mergeMap( () => 
        this.dataService
          .getMissionTypes$()
          .pipe(map(missions => new MissionsLoaded(missions)))
      )
    )

  constructor(private actions$: Actions, private dataService: DataService) {}

}
