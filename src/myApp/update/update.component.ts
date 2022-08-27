import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  

  display = "none";
  ngOnInit(): void {
    
    
  }
  
  
  

}
