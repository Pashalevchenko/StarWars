import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'ngb-modal';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ModalComponent>, private favoriteStarShipService: FavoriteStarShipService) { }

  ship: any;
  ngOnInit(): void {
  }

  deliteFromFavList(){
    this.favoriteStarShipService.deliteStarShip(this.ship)
    console.log(this.ship)
    this.modalRef.close()
  }

  

}
