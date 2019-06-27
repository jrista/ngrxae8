import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {autoEntityMetaReducer, IEntityState} from '@briebug/ngrx-auto-entity';
import {Email} from '../core/models/email.model';
import {emailReducer} from './email.state';

export interface AppState {
  email: IEntityState<Email>;
}

export const reducers: ActionReducerMap<AppState> = {
  email: emailReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [autoEntityMetaReducer] : [autoEntityMetaReducer];
