import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-listar',
  templateUrl: './mascotas-listar.component.html',
  styleUrls: ['./mascotas-listar.component.css']
})
export class MascotasListarComponent implements OnInit {

  public mascotas:Array<Mascota> = [];

  constructor(private mascotasService: MascotasService,private router:Router) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe((data)=>{
      this.mascotas = data;
    });
  }

  delete(id:number){
   // console.log(id);
    this.mascotasService.deleteMascota(id).subscribe(data => {
    
    const index = this.mascotas.findIndex(mascota => mascota.id ==id);//me devuelve el indice del elemento que coincide con el id pasado como parametro

     this.mascotas.splice(index,1);//el primer valor indica desde que posicion voy a eliminar y el segundo ,cuantos elementos voy a eliminar
});  
  //alert("mascota eliminada");
  }

}
