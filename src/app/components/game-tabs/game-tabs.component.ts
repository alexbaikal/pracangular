import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  @Input() game!:Game;
  // <app-game-tabs [game]="game"></app-game-tabs>
  constructor() { }

  ngOnInit(): void {
  }

}
