import { Routes } from "@angular/router";
import { FavoriteComponent } from "../components/favoriteFolder/favorite/favorite.component";
import { PlanetDetailsComponent } from "../components/planetsFolder/planet-details/planet-details.component";
import { PlanetsComponent } from "../components/planetsFolder/planets/planets.component";
import { StarShipDetailsComponent } from "../components/starShipFolder/star-ship-details/star-ship-details.component";
import { StarShipsComponent } from "../components/starShipFolder/star-ships/star-ships.component";


export const routes: Routes =[
    {path: "starships", component: StarShipsComponent},
    {path: "favorite", component: FavoriteComponent},
    {path: "planets", component: PlanetsComponent, 
    // children: [
    //     {path: ':id', component: PlanetDetailsComponent}
    // ]
},
    {path: "planets/:id", component: PlanetDetailsComponent},
    {path: "starships/:id", component: StarShipDetailsComponent}
  ]