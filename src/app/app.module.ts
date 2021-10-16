import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
