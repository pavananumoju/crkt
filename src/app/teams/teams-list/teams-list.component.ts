import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/players/player.service';
import { CSK_List } from '../models/csk-list.model';
import { Team } from '../team.model';
import { iplTeamsList } from './teams-list.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  iplTeams : Team[] = [];

  ngOnInit(): void {
    this.iplTeams = iplTeamsList;
  }

  displayTeamList(teamCode: string){
      console.info('Team: '+teamCode);
      this.playerService.display(teamCode);
  }

}
