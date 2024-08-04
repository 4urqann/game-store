import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../game.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  constructor(private Http: HttpClient) { }
  BaseURL: string = "http://localhost:3000/games";

  games!: Game[];
  _filterText: string = '';
  filteredGames!: Game[];

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    value = this._filterText;
    this.filteredGames = this.onFilterGames(value);
  }

  ngOnInit(): void {
    this.getAllGames();
    this.filteredGames = this.games;
  }

  getAllGames() {
    this.Http.get<Game[]>(this.BaseURL)
      .subscribe((games: Game[]) => {
        this.games = games;
        console.log(this.games);
      });
  }

  onFilterGames(filterTerm: string) {
    if(filterTerm === '') {
      return this.games;
    } else {
      return this.games.filter((game) => {
        return game.catagory.toLowerCase() === filterTerm.toLowerCase();
      })
    }
  }

}
