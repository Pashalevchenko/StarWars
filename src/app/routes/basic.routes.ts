import { Routes } from "@angular/router";
import { FavoriteComponent } from "../components/favoriteFolder/favorite/favorite.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { NavigationComponent } from "../components/navigation/navigation.component";
import { PlanetDetailsComponent } from "../components/planetsFolder/planet-details/planet-details.component";
import { PlanetsComponent } from "../components/planetsFolder/planets/planets.component";
import { StarShipDetailsComponent } from "../components/starShipFolder/star-ship-details/star-ship-details.component";
import { StarShipsComponent } from "../components/starShipFolder/star-ships/star-ships.component";


export const routes: Routes =[
    // {path: "/", component: NavigationComponent},
        {path: "starships", component: StarShipsComponent},
        {path: "favorite", component: FavoriteComponent},
        {path: "planets", component: PlanetsComponent,},
        {path: "planets/:id", component: PlanetDetailsComponent},
        {path: "starships/:id", component: StarShipDetailsComponent},
         {path: "login", component: LoginPageComponent},
    
  ]