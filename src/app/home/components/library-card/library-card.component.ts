import { Component, Input } from '@angular/core';
import { Game } from '../../game.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrl: './library-card.component.scss'
})
export class LibraryCardComponent {
  constructor(public cartService: CartService) { }

  @Input() liberaryGame!: Game

  cartGames: Game[] = this.cartService.games;

  gamee = this.cartGames.at(1);
}
