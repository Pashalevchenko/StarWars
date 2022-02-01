import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpClients: HttpClient) { }

  getPlanets(page:number): Observable<any[]>{
    return this.httpClients.get<any[]>(`https://swapi.dev/api/planets/?page=${page}`)
  }
}
