
import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Game } from '../../game.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
 @Input()currentGame!: Game;

constructor(private router: Router, private route: ActivatedRoute) {}

public details(id: any) {
  this.router.navigate(['home','game-details', id]);
}

}
