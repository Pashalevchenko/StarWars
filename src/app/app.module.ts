// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Commponents
import { AppComponent } from './app.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { StarShipComponent } from './components/star-ship/star-ship.component';
import { PlanetsComponent } from './components/planetsFolder/planets/planets.component';
import { PlanetComponent } from './components/planetsFolder/planet/planet.component';
import { PlanetDetailsComponent } from './components/planetsFolder/planet-details/planet-details.component';
import { routes } from './routes/basic.routes';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StarShipDetailsComponent } from './components/star-ship-details/star-ship-details.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { FavoriteShipComponent } from './components/favorite-ship/favorite-ship.component';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
