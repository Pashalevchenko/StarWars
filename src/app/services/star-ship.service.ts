import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import starShipModel from '../models/starShip';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  constructor(private httpClient: HttpClient) { }
  getStarShips(url?: string): Observable<starShipModel[]> {
    return this.httpClient.get<starShipModel[]>(url || `https://swapi.dev/api/starships/`)
    // ???????????????????
  }
}
