import { Injectable } from "@angular/core";
import { CSK_List } from "../teams/models/csk-list.model";
import { SRH_List } from "../teams/models/srh-list.model";
import { Player } from "./player.model";

@Injectable({providedIn:'root'})
export class PlayerService{
    playerList: Player[] = SRH_List;

    display(teamCode: string){
        if(teamCode === 'CSK'){
            this.playerList = CSK_List;
            // console.info('changed to csk');
        }else if(teamCode === 'SRH'){
            this.playerList = SRH_List;
            // console.info('changed to srh');
        }
    }
}