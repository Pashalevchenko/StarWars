// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './routes/basic.routes';


// Commponents
import { AppComponent } from './app.component';
import { StarShipsComponent } from './components/starShipFolder/star-ships/star-ships.component';
import { StarShipComponent } from './components/starShipFolder/star-ship/star-ship.component';
import { PlanetsComponent } from './components/planetsFolder/planets/planets.component';
import { PlanetComponent } from './components/planetsFolder/planet/planet.component';
import { PlanetDetailsComponent } from './components/planetsFolder/planet-details/planet-details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StarShipDetailsComponent } from './components/starShipFolder/star-ship-details/star-ship-details.component';
import { FavoriteComponent } from './components/favoriteFolder/favorite/favorite.component';
import { FavoriteShipComponent } from './components/favoriteFolder/favorite-ship/favorite-ship.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Overlay } from '@angular/cdk/overlay';
import { StarShipDirectiveDirective } from './components/starShipFolder/star-ship/star-ship-directive.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LenguageChangeComponent } from './components/lenguage-change/lenguage-change.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    StarShipsComponent,
    StarShipComponent,
    PlanetsComponent,
    PlanetComponent,
    PlanetDetailsComponent,
    SpinnerComponent,
    StarShipDetailsComponent,
    FavoriteComponent,
    FavoriteShipComponent,
    LoginPageComponent,
    NavigationComponent,
    ModalWindowComponent,
    StarShipDirectiveDirective,
    LenguageChangeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en'
    })
    // NgModule
    // NgbModal
    
  
  ],
  providers: [MdbModalService, Overlay],
  bootstrap: [AppComponent]
})
export class AppModule { }
