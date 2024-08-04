import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackbar(message: any) {
    this._snackBar.open(message, 'Undo', {
      duration: 3000
    });
  }
}
