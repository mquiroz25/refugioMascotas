import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from './mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private baseUrl:string = 'http://localhost:8090/mascotas';

  constructor(private httpClient: HttpClient) { }

  
  public getMascotas(){
    return this.httpClient.get<Mascota[]>(`${this.baseUrl}`);
    }

    public addMascota(mascota: Mascota){
      return this.httpClient.post<Mascota>(`${this.baseUrl}`,mascota);
    }
}
