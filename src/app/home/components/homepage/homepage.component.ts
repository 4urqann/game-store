import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../game.model';
import { FormControl } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

  constructor(private Http: HttpClient, private cart: CartService) { }
  
  BaseURL: string = "http://localhost:3000/games";

  games = this.cart.games;
  private _filterText: string = '';
  filteredGames!: Game[];

  @Input() filterControl: FormControl = new FormControl('');


  ngOnInit(): void {
    // this.getAllGames();
    this.filteredGames = this.games;

    this.filterControl.valueChanges.subscribe((currentValue: any) => {
      console.log(currentValue);
      if (currentValue === '') {
        this.filteredGames = this.games;
      } else {
        this.filteredGames = this.games.filter((game) => {
          return game.title.toLowerCase().includes(currentValue.toLowerCase()) 
          || game.catagory.toLowerCase().includes(currentValue.toLowerCase());
        });

      }
    });
  }

  // getAllGames() {
  //   this.Http.get<Game[]>(this.BaseURL)
  //     .subscribe((games: Game[]) => {
  //       this.games = games;
  //       this.filteredGames = this.games;
  //       console.log(this.games);
  //     });
  // }

  //just a shortcut should remove later

  addAllGames() {
   let allGames :Game[] = this.cart.addedGames;

   this.games.forEach(game => {
    allGames.push(game);
   });
  }
}
