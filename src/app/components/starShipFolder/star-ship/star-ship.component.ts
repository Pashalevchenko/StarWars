import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'ngb-modal';
import { Subscription } from 'rxjs';
import { FavoriteStarShipService } from 'src/app/services/favorite-star-ship.service';
import { SetFavoriteStarShipService } from 'src/app/services/set-favorite-star-ship.service';
import { ModalWindowComponent } from '../../modal-window/modal-window.component';

@Component({
  selector: 'app-star-ship',
  templateUrl: './star-ship.component.html',
  styleUrls: ['./star-ship.component.css'],
  providers: [SetFavoriteStarShipService]
})
export class StarShipComponent implements OnInit, OnDestroy {

  @Input() starShip: any;
  @Output() favoriteStarship = new EventEmitter;
  isInFavorite!: boolean;
  // favoriteLIst: any[] = [];
  private favoritToDestroy!: Subscription
  buttonText: string = '';
  modalRef: MdbModalRef<ModalWindowComponent> | null = null
  constructor(private router: Router,
    private favoriteStarShipService: FavoriteStarShipService,
    private modalService: MdbModalService,
    private setFavoriteStarShipService: SetFavoriteStarShipService
  ) { }

  ngOnInit(): void {
    this.startSettings();
    this.favoritToDestroy = this.favoriteStarShipService.favoritListWasChanged.subscribe(() => {
      this.startSettings();
    })
  }
  ngOnDestroy(): void {
    this.favoritToDestroy.unsubscribe()
    console.log("Delite")
  }

  private startSettings(){
    this.setFavoriteStarShipService.sortByFavorite(this.starShip);
    this.isInFavorite = this.setFavoriteStarShipService.isInFavoriteList;
    this.buttonText = this.setFavoriteStarShipService.textForButton;
  }


  starShipDetail() {
    this.router.navigate(['starships', this.urlValidation()], { state: this.starShip });
  }

  urlValidation() {
    return this.starShip.name.split(" ").join("_");
  }

  addToFavorite() {
    if (!this.setFavoriteStarShipService.isInFavoriteList) {
      this.favoriteStarship.emit(this.starShip);
    } else if (this.setFavoriteStarShipService.isInFavoriteList) {
      this.modalRef = this.modalService.open(ModalWindowComponent, {
        data: { ship: this.starShip }
      })
      // this.modalRef?.onClose.subscribe((isFavorite: boolean) => {
      //   if (isFavorite) {
      //     // this.setFavoriteStarShipService.isInFavoriteList = isFavorite;
      //     // this.buttonText = "Add to favorite1"
      //     // console.log("Hello")
      //   }
      // })
    }
  }
}
