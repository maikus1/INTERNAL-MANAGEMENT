import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menubar-management',
  templateUrl: './menubar-management.component.html',
  styleUrls: ['./menubar-management.component.css']
})
export class MenubarManagementComponent implements OnInit {

  button1:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
