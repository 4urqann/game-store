import { Injectable } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { NotificationService } from '../../shared/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../shared/components/confirmation-popup/confirmation-popup.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addedGames: Game[] = [];
  gamesOwned: Game[] = [];

  constructor(private router: Router,
    private notiService: NotificationService,
    public dialog: MatDialog) { }

  singlePurchase(game: Game) {

    const dialogRef = this.dialog.open(ConfirmationPopupComponent);
    dialogRef.componentInstance.confirMsg = `Are you sure you want to proceed with this purchase ${game.price}?`
    dialogRef.afterClosed().subscribe(isConfirm => {

      if (isConfirm) {
        console.log(isConfirm);
        this.gamesOwned.push(game);
      }
    });
  }
  
addToCart(game: Game) {
  this.addedGames.push(game);
  this.notiService.openSnackbar('This game has been added to your cart!!!');
  // this.router.navigate(['/cart']);
}

removeFromCart(game: Game) {
  const foundGame = this.addedGames.find((g) => g.id === game.id);

  if (foundGame !== undefined) {
    const index = this.addedGames.indexOf(foundGame);
    this.addedGames.splice(index, 1);
    console.log(index);
    this.notiService.openSnackbar('This game has been Removed from your cart!!!');
  }
}

buyAllGames() {
  for (var i = 0; i < this.addedGames.length; i++) {
    this.gamesOwned.push(this.addedGames[i]);
    this.addedGames.splice(i, 1);
    i--; //decrement i IF we remove an item
  }
}

  get total() {
  let amount: number = 0;
  this.addedGames.forEach(game => {
    amount = amount + game.price;
  });
  return amount;
}
}
