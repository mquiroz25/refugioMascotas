import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';

@Component({
  selector: 'app-mascotas-listar-publica',
  templateUrl: './mascotas-listar-publica.component.html',
  styleUrls: ['./mascotas-listar-publica.component.css']
})
export class MascotasListarPublicaComponent implements OnInit {
  
  public mascotas:Array<Mascota> = [];
  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    });
  }

}
