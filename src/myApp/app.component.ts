import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserService } from './services/user.service';
import { UpdateComponent } from './update/update.component';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private matDialog:MatDialog) {}

  
  ngOnInit() {}

  


}
