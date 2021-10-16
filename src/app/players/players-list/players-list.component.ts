import { Component, OnInit } from '@angular/core';
import { CSK_List } from 'src/app/teams/models/csk-list.model';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayersList } from '../players-list.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  playersList: Player[] = this.playerService.playerList;

  ngOnInit(): void {
    this.playersList = this.playerService.playerList;
  }

}
