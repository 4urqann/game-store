import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../../shared/components/confirmation-popup/confirmation-popup.component';
import { Game } from '../../game.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public cartService: CartService, public dialog: MatDialog) {
    console.log(cartService.addedGames);
    console.log(cartService.total);
  }

  cartGames: Game[] = this.cartService.games;

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent);
    dialogRef.componentInstance.confirMsg = `Are you sure you want to proceed with this purchase of ₹${this.cartService.total}?` 
    dialogRef.afterClosed().subscribe(isConfirm => {
      if (isConfirm) { 
        console.log(isConfirm);
        this.onBuy();
      } 
    });
  }

  onBuy() {
    this.cartService.buyAllGames();
  }

}
