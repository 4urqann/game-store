import { Injectable } from '@angular/core';
import { Game } from '../game.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addedGames: Game[] = [];
  gamesOwned: Game[] = [];

  constructor(private router: Router) { }

  addToCart(game: Game) {
    this.addedGames.push(game);
    // this.router.navigate(['/cart']);
  }

  removeFromCart(game: Game) {
    
    const foundGame = this.addedGames.find((g) => g.id === game.id);

    if (foundGame !== undefined) {
      const index = this.addedGames.indexOf(foundGame);
      this.addedGames.splice(index, 1);
      console.log(index);
    }
  }

  buyAllGames() {
    for(var i = 0; i < this.addedGames.length; i++) {
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
