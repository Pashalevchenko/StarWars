import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favorite-ship',
  templateUrl: './favorite-ship.component.html',
  styleUrls: ['./favorite-ship.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FavoriteShipComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }
  @Input() favoriteShip: any

  @Output() shipToDelite = new EventEmitter();

  ngOnInit(): void {
  }

  deliteFromFavList(){
    this.shipToDelite.emit(this.favoriteShip)
  }

  open(content: any) {
    this.modalService.open(content);
  }
  
}
