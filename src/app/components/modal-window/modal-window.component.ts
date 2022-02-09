import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'ngb-modal';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';
import { SetFavoriteStarShipService } from 'src/app/services/set-favorite-star-ship.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ModalComponent>,
              private favoriteStarShipService: FavoriteStarShipService,
              private setFavoriteStarShipService: SetFavoriteStarShipService
              ) { }

  ship: any;
  // isInFav!: boolean;
  ngOnInit(): void {
  }

  deliteFromFavList(){
    this.favoriteStarShipService.deliteStarShip(this.ship)
    this.setFavoriteStarShipService.isInFavoriteList = false
    this.modalRef.close()
  }

  

}
