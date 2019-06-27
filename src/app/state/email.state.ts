import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Email } from '../core/models/email.model';

export const { initialState, selectors, facade: EmailFacadeBase } = buildState(Email);

export const {
  selectAll: allEmails
} = selectors;

export function emailReducer(state = initialState): IEntityState<Email> {
  return state;
}
