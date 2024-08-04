import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


import { HomepageComponent } from './components/homepage/homepage.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LibraryComponent } from './components/library/library.component';
import { SharedModule } from "../shared/shared.module";

const AngMaterial = [
    MatCardModule,
    MatButtonModule
]

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'game-details/:id', component: GameDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'library', component: LibraryComponent }
    // { path: 'sidenavbar', component: SidenavbarComponent },
]

@NgModule({
    declarations: [
        HomepageComponent,
        SidenavbarComponent,
        GameCardComponent,
        GameDetailsComponent,
        CartComponent,
        LibraryComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        AngMaterial
    ],
    exports: []
})
export class HomeModule { }