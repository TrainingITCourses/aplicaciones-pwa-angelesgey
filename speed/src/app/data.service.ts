import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /* 
   * Obtiene los launches del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadLaunches con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getLaunches$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map((res: any) => res.launches));

  /* 
   * Obtiene los statuses del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadLaunchStatuses con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getLaunchStatuses$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types));

  /* 
   * Obtiene las agencies del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadAgencies con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getAgencies$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies));

  /* 
   * Obtiene las missions del fichero JSON si no estan todavia almacenados en local
   * y lanza la accion LoadMissionTypes con dispatch del store para actualizar el estado
   * y notificar a los subscriptores
   */
  public getMissionTypes$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types));
 

}
