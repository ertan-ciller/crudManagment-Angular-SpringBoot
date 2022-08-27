import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

import { GetUsersComponent } from './get-users/get-users.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [

  {path:'user',component:GetUsersComponent},
  {path: '',component:GetUsersComponent ,pathMatch:'full'},
  {path:'add',component:AddUserComponent},
  {path: 'delete', component:DeleteUserComponent},
  {path:'update',component: UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
