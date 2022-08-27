import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../services/user.service';
import { Users } from '../users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:Users = new Users();

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    
    
  }
  add(form:NgForm){
    
    console.log(this.user);
    

    this.userService.addUsers(this.user).subscribe(data=> console.log(JSON.stringify(data))),catchError(this.handleError);
    alert(this.user.username + " Kullanıcı eklendi")
    form.reset();

  }
  handleError(err:HttpErrorResponse){
    let errormessage=''
    if(err.error instanceof ErrorEvent){
      errormessage='Bir Hata oluştu' + err.error.message

    }
    else{
      errormessage = 'sistemsel bir hata'
    }
    return throwError(errormessage);

  }

}
