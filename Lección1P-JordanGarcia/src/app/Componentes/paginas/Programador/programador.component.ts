import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class programadorComponent {
  

  miFormulario: FormGroup;
 
  constructor(private fb: FormBuilder
    ) {
   
      this.miFormulario = this.fb.group({
        
       
      })
    }


    nombre: string = 'Anderson';
apellido: string = 'Jordan Garcia';

correoElectronico: string = 'andjor2019@gmail.com';
foto: string = 'ruta/a/tu/foto.png';
  
}
