import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersList } from './players-list.model';



@NgModule({
  declarations: [
    PlayersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlayersListComponent
  ]
})
export class PlayersModule { }
