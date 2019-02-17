import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataService } from 'src/app/data.service';
import { LaunchActionTypes, LaunchesLoaded, SearchLaunches } from './launch.actions';
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

  @Effect()
  public search$ = this.actions$.pipe(ofType(LaunchActionTypes.SearchLaunches),
    mergeMap((action: SearchLaunches) => {
      const searchResult = this.dataService.search(action.payload);
      return of(new LaunchesLoaded(searchResult));
    })
  );
  
  constructor(private actions$: Actions, private dataService: DataService) {}
}
