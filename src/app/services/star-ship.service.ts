import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarShipService {

  constructor(private httpClient: HttpClient) { }
  getStarShips(url?: string): Observable<any[]> {
    return this.httpClient.get<any[]>(url || `https://swapi.dev/api/starships/`)
  }
}
