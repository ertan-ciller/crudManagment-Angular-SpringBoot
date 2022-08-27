import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { PopupComponent } from '../popup/popup.component';
import { UserService } from '../services/user.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Users } from '../users';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  

  constructor(formBuilder: FormBuilder,
     private userService: UserService,
     private matDialog: MatDialog) { }

  users: Users[] = [];
  ngOnInit(): void {

    this.userService.getUsers().subscribe(data => {
      this.users = data
    });
  }

  deleteUser(user: any) {

    let myJSON = JSON.stringify(user)

    console.log(myJSON)

    this.userService.deleteUser(myJSON).subscribe(data => console.log(myJSON))

  }
  refresh(){
    window.location.reload();
  }

  openDialog(user:any){

    console.log(user);
    
    this.matDialog.open(PopupComponent, {
      width: '98vw', //sets width of dialog
      height:'70vh', //sets width of dialog
      maxWidth: '100vw', //overrides default width of dialog
      maxHeight: '100vh', //overrides default height of dialog
      disableClose: true, //disables closing on clicking outside box. You will need to make a dedicated button to close
      data: {
        dataKey: user

      }
      
    });

    
  }

}
