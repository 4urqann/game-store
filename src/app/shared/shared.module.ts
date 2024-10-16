import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

const angMaterial = [
  MatDialogModule,
  MatSnackBarModule,
  MatBadgeModule
]




@NgModule({
  declarations: [HeaderComponent, ConfirmationPopupComponent, SearchBarComponent, MenuComponent, SidenavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    angMaterial
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    FormsModule,
    ReactiveFormsModule,
    SidenavbarComponent
  ]
})
export class SharedModule { }
