import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../game.model';
import { CartService } from '../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../../../shared/components/confirmation-popup/confirmation-popup.component';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss'
})
export class GameDetailsComponent implements OnInit {
  constructor(
    private Http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    public dialog: MatDialog
  ) { }
  BaseURL: string = "http://localhost:3000/games";

  game!: Game;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.getGame(params.id);
    });

  }

  getGame(id: string) {
    this.Http.get<Game>(this.BaseURL + "/" + id)
      .subscribe((game: Game) => {
        this.game = game;
        console.log(game);
        this.doesGameExist();
      });
  }

  doesGameExist(): boolean {
    const foundGame = this.cartService.addedGames.find((game) => game.id === this.game.id);
    return foundGame === undefined ? false : true;
  }

  onAdd() {
    this.cartService.addToCart(this.game);
    console.log(this.cartService.addedGames);
  }

  onRemove() {
    this.cartService.removeFromCart(this.game);
  }

  onBuy() {
      const dialogRef = this.dialog.open(ConfirmationPopupComponent);
      dialogRef.componentInstance.confirMsg = `Are you sure you want to proceed with this purchase ${this.game.price}?` 
      dialogRef.afterClosed().subscribe(isConfirm => {
        if (isConfirm) { 
          console.log(isConfirm);
          this.cartService.gamesOwned.push(this.game);
        } 
      });
  }

}
