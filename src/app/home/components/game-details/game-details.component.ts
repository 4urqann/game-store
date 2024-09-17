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
    private cartService: CartService
  ) { }
  BaseURL: string = "http://localhost:3000/games";

  game!: Game;
  alreadyOwned: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.getGame(params.id);
    });
  }

  // isGameOwned() {
  //   const alreadyOwned = this.cartService.gamesOwned.find((ownedGame) => this.game.id === ownedGame.id);
  //   return alreadyOwned;
  // }

  getGame(id: string) {
    this.Http.get<Game>(this.BaseURL + "/" + id)
      .subscribe((game: Game) => {
        this.game = game;
        console.log(game);
        this.doesGameExist();
        this.isGameOwned();
      });
  }

  doesGameExist(): boolean {
    const foundGame = this.cartService.addedGames.find((game) => game.id === this.game.id);
    return foundGame === undefined ? false : true;
  }

  isGameOwned() {
    this.cartService.gamesOwned.forEach(ownedGame => {
      if (this.game.id === ownedGame.id) {
        this.alreadyOwned = true;
      }
    });
  }

  onAdd() {
    this.cartService.addToCart(this.game);
    console.log(this.cartService.addedGames);
  }

  onRemove() {
    this.cartService.removeFromCart(this.game);
  }

  onBuy() {
    this.cartService.singlePurchase(this.game);
  }
  

}
