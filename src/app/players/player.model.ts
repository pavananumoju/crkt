import { TeamsEnum } from "../teams/teams.enum";
import { PlayerCategory } from "./player-category.enum";

export class Player{
    name: string;
    dpUrl?: string;
    category?: PlayerCategory;
    team: TeamsEnum;
}