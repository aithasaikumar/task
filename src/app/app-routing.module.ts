import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/all-users/all-users.component';


const routes: Routes = [
    {path:'',redirectTo:"allUssers",pathMatch:"full"},
    {path:"allUssers",component:AllUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
