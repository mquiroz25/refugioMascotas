import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../shared/mascotas.service';
import { FormBuilder, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas-agregar',
  templateUrl: './mascotas-agregar.component.html',
  styleUrls: ['./mascotas-agregar.component.css']

  
})


export class MascotasAgregarComponent implements OnInit {

   ageValidator (control: AbstractControl):{[key: string]: boolean} | null {
    if(control.value<0 || control.value>120){
    return {'ageValidator': true}
    }
    return null;
    };


    stringUnic (control: AbstractControl):{[key: string]: boolean} | null {

       const string = String(control.value);

       const array = string.split(" ");

       if (array.length>1)
      {
      return {'stringUnic': true}
      }
      return null;
      };
    
  public mascotaForm = this.fb.group({
    nombre: ['',[Validators.required,this.stringUnic]],
    foto: ['',Validators.required],
    tipo: ['',Validators.required],
    edad: ['',[Validators.required,this.ageValidator]],
    descripcion: ['',Validators.required]
  });

  constructor(private fb: FormBuilder,private mascotaService:MascotasService,private router:Router) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
   // console.warn(this.mascotaForm.value);
    this.mascotaService.addMascota(this.mascotaForm.value).subscribe(data => {
      this.router.navigate(['/mascotas-listar']);
      console.log("mascota agregada");
});
  }

  reset(){
  this.mascotaForm.reset();
}

  ngOnInit() {
  }

}
