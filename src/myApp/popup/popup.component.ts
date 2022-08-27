import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UserService } from '../services/user.service';
import { Users } from '../users';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  users: Users[]=[];
  
  constructor(private userService: UserService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  

  ngOnInit(): void {

    console.log("asdgsag" + this.data.username)
    
  }


  add(form:NgForm){


    

  }




}
