import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalWindowComponent } from '../../modal-window/modal-window.component';

@Component({
  selector: 'app-favorite-ship',
  templateUrl: './favorite-ship.component.html',
  styleUrls: ['./favorite-ship.component.css'],
  // providers: [NgbModalConfig, NgbModal]
})
export class FavoriteShipComponent implements OnInit {
  modalRef: MdbModalRef<ModalWindowComponent> | null = null
  // private modalService: NgbModal

  constructor(private modalService: MdbModalService) {
    
   }
  @Input() favoriteShip: any

  ngOnInit(): void {
  }

  open() {
    this.modalRef = this.modalService.open(ModalWindowComponent, {data: {ship: this.favoriteShip}})
  }
 
}
