import { NgModule } from "@angular/core";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'profile', component: UserDetailsComponent }
]

@NgModule({
    declarations: [UserDetailsComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [UserDetailsComponent]
})
export class ProfileModule { }