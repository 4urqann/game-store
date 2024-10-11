import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Game } from '../../game.model';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent {
  constructor ( public cartService: CartService ) {}

  @Input() cartGame!: Game

  cartGames: Game[] = this.cartService.games;

  gamee = this.cartGames.at(0);
}
