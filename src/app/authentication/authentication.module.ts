import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const AngMaterial = [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
]

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    declarations: [SignupComponent, LoginComponent],
    imports: [  
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        AngMaterial
    ],
    exports: [SignupComponent]
})
export class AuthenticationModule { }