import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { HomepageComponent } from './components/homepage/homepage.component';
import { SidenavbarComponent } from '../shared/components/sidenavbar/sidenavbar.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LibraryComponent } from './components/library/library.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileModule } from "../profile/profile.module";
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';

const AngMaterial = [
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatProgressSpinnerModule
]

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'game-details/:id', component: GameDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'library', component: LibraryComponent },
    // { path: 'sidenavbar', component: SidenavbarComponent },
]

@NgModule({
    declarations: [
        HomepageComponent,
        GameCardComponent,
        GameDetailsComponent,
        CartComponent,
        LibraryComponent,
        CartCardComponent,
        LibraryCardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ProfileModule,
        AngMaterial
    ],
    exports: []
})
export class HomeModule { }