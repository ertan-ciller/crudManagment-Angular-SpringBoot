
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Users } from '../users';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  users: Users[]=[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
    this.userService.getUsers().subscribe(response=>{
      this.users=response})

  }
  

  }
 

