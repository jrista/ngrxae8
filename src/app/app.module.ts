import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {StateModule} from './state/state.module';
import {Email} from './core/models/email.model';
import {EmailService} from './core/services/email.service';
import {EmailListComponent} from './features/emails/email-list/email-list.component';
import {NgrxAutoEntityModule} from '@briebug/ngrx-auto-entity';

@NgModule({
  declarations: [
    AppComponent,
    EmailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StateModule,
    NgrxAutoEntityModule
  ],
  providers: [
    {provide: Email, useClass: EmailService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
