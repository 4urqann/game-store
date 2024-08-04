import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../game.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  constructor(private Http: HttpClient) { }
  BaseURL: string = "http://localhost:3000/games";

  games!: Game[];
  private _filterText: string = '';
  filteredGames!: Game[];

  filterControl: FormControl = new FormControl('');


  ngOnInit(): void {
    this.getAllGames();

    this.filterControl.valueChanges.subscribe((currentValue: any) => {
      console.log(currentValue);
      if (currentValue === '') {
        this.filteredGames = this.games;
      } else {
        this.filteredGames = this.games.filter((game) => {
          return game.title.toLowerCase().includes(currentValue.toLowerCase()) 
          || game.catagory.toLowerCase().includes(currentValue.toLowerCase());
        })

      }
    })
  }

  getAllGames() {
    this.Http.get<Game[]>(this.BaseURL)
      .subscribe((games: Game[]) => {
        this.games = games;
        this.filteredGames = this.games;
        console.log(this.games);
      });
  }


}
