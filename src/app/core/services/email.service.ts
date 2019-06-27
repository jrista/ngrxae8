import { Injectable } from '@angular/core';
import {IAutoEntityService, IEntityInfo} from '@briebug/ngrx-auto-entity';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService implements IAutoEntityService<any> {
  constructor() { }

  loadAll(entityInfo: IEntityInfo): Observable<any> {
    return of([]);
  }
}
