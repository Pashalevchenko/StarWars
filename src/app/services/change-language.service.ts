import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { SetFavoriteStarShipService } from './set-favorite-star-ship.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {

  languageWasChanged = new Subject()

  private _currentLanguage: string;
  constructor(private setFavoriteStarShipService: SetFavoriteStarShipService ) { }

  set currentLanguage(lang:string){
    this._currentLanguage = lang
    console.log(this.setFavoriteStarShipService.textForButton)
    this.languageWasChanged.next(lang)
    
  }

 
}
