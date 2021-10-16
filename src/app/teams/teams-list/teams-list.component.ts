import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { iplTeamsList } from './teams-list.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  constructor() { }

  iplTeams : Team[] = [];

  ngOnInit(): void {
    this.iplTeams = iplTeamsList;
  }

}
