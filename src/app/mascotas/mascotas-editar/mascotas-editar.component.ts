import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MascotasService } from '../shared/mascotas.service';
import { Mascota } from '../shared/mascota';
import { Observable } from 'rxjs';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mascotas-editar',
  templateUrl: './mascotas-editar.component.html',
  styleUrls: ['./mascotas-editar.component.css']
})
export class MascotasEditarComponent implements OnInit {

  mascotaForm = this.fb.group({
    id:['',Validators.required],
    foto:['',Validators.required],
    nombre: ['',Validators.required],
    tipo: ['',Validators.required],
    edad: ['',Validators.required],
    descripcion: ['',Validators.required]
  });

  mascota$: Observable<Mascota>;

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private mascotaService:MascotasService,private router:Router) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.mascota$ = this.mascotaService.getMascota(id);

  //  this.mascota$.subscribe(val => console.warn(val));
    this.mascota$.subscribe(data=> this.mascotaForm.setValue(data));
    
  }

  onSubmit(){
      this.mascotaService.updateMascota(this.mascotaForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
});
  }
}
