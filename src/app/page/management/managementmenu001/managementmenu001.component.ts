import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managementmenu001',
  templateUrl: './managementmenu001.component.html',
  styleUrls: ['./managementmenu001.component.css']
})
export class Managementmenu001Component implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  constructor() { }

  ngOnInit(): void {
  }

  show_search_document_number_day(){
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
