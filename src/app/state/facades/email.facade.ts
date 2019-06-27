import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../';
import { Email } from '../../core/models/email.model';
import { EmailFacadeBase } from '../email.state';

@Injectable({
  providedIn: 'root'
})
export class EmailFacade extends EmailFacadeBase {
  constructor(store: Store<AppState>) {
    super(Email, store);
  }

  // TODO: Extend your facade's functionaltiy here!
}
