import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ChangeLanguageService } from 'src/app/services/change-language.service';

@Component({
  selector: 'app-lenguage-change',
  templateUrl: './lenguage-change.component.html',
  styleUrls: ['./lenguage-change.component.css']
})
export class LenguageChangeComponent implements OnInit {

  
  constructor(private translateService: TranslateService, private changeLanguageService: ChangeLanguageService) { }

  
  ngOnInit(): void {
    
  }
  

  selectedLenguageHendler(leng: any){
      this.translateService.use(leng.target.value)
      this.changeLanguageService.currentLanguage = leng.target.value
      
  }

}
