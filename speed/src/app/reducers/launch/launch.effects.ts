import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$.pipe(
    ofType(LaunchActionTypes.LoadLaunches),
    mergeMap(() => 
      this.dataService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
    )
  );
  
  constructor(private actions$: Actions, private dataService: DataService) {}
}
