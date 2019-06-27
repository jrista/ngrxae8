import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core/core.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './index';
import {EffectsModule} from '@ngrx/effects';
import {EntityEffects} from '@briebug/ngrx-auto-entity';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([EntityEffects])
  ]
})
export class StateModule { }
