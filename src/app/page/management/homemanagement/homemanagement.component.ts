import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-homemanagement',
  templateUrl: './homemanagement.component.html',
  styleUrls: ['./homemanagement.component.css'],
})
export class HomemanagementComponent implements OnInit {
  public show:boolean = true;
  public buttonName:any = 'Show';
  constructor() { }

  ngOnInit(): void {
  }

  openDialog(): void {console.log(this.show)
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
