import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';

@Component({
  selector: 'app-mascotas-detalle',
  templateUrl: './mascotas-detalle.component.html',
  styleUrls: ['./mascotas-detalle.component.css']
})
export class MascotasDetalleComponent implements OnInit {

  mascota:Mascota;
  constructor(private route: ActivatedRoute,private mascotaService:MascotasService) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

     this.mascotaService.getMascota(id).subscribe(data=>this.mascota=data);


  }

}
