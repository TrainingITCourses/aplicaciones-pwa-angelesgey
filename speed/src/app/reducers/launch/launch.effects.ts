import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$.pipe(ofType(LaunchActionTypes.LoadLaunches),
    mergeMap(() => {
      const launches = this.dataService.getLaunches();
      return of(new LaunchesLoaded(launches));
    })
  );
  
  constructor(private actions$: Actions, private dataService: DataService) {}

}
