import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public cartService: CartService) {
    console.log(cartService.addedGames);
   }

  onBuy() {
    alert("Are you sure you want to proceed with this action!!!")
    this.cartService.buyAllGames();
  }

}
