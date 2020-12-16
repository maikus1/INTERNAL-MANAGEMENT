import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
  </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">อนุมัติ</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">ไม่อนุมัติ</button>
    </div>
    
  `
})
export class NgbdModalContent {


  constructor(public activeModal: NgbActiveModal) { }




}


@Component({
  selector: 'app-homemanagement',
  templateUrl: './homemanagement.component.html',
  styleUrls: ['./homemanagement.component.css'],
})
export class HomemanagementComponent {
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  // ngOnInit(): void {
  // }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }


}
