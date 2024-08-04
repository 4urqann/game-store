import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const angMaterial = [
  MatDialogModule,
  MatSnackBarModule
]




@NgModule({
  declarations: [HeaderComponent, ConfirmationPopupComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    angMaterial
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
