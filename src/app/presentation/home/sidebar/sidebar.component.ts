import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/domain/entities/Student';
import { Teacher } from 'src/app/domain/entities/Teacher';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

userlogged:Student | Teacher= JSON.parse(window.localStorage.getItem("user") ?? "" );

}
