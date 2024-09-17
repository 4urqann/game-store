
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../../game.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  
  @Input() currentGame!: Game;

  public details(id: any) {
    this.router.navigate(['home', 'game-details', id]);
  }

  directBuy() {
    this.cartService.singlePurchase(this.currentGame);
  }

  dirCart() {
    this.cartService.addToCart(this.currentGame);
  }

}
