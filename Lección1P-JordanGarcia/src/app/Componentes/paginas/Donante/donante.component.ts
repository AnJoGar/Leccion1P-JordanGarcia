import { Component } from '@angular/core';
import { donante } from 'src/app/Models/donante';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
    dateTimeInput: 'DD/MM/YYYY HH:mm'
  },
};

@Component({
  selector: 'app-donante',
  templateUrl: './donante.component.html',
  styleUrls: ['./donante.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  ]
})
export class DonanteComponent {

  nombre = "";
  apellido="";
  valorDonar=0;
  fechaEntrega="";
  listDonante: donante[] = [];
  
  listEliminados: donante[] = [];

  totalEliminados: number = 0;
  miFormulario: FormGroup;
 
  constructor(private fb: FormBuilder
    ) {
   
    
      
      this.miFormulario = this.fb.group({
        
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        fechaEntrega: ['', Validators.required],
        valorDonar: ['', Validators.required],
      })
    }
  agregarDonante() {
      //tomo los datos del formulario
      const donante: donante = {
        
        nombre: this. miFormulario.value.nombre,
        apellido: this. miFormulario.value.apellido,
        fechaEntrega:this.miFormulario.value.fechaEntrega,
        valorDonar:parseFloat(this.miFormulario.value.valorDonar),
       estado: this.miFormulario.value.estado,
      }
      //agrego a la lista
      this.listDonante.push(donante);
  
      //limpiar el formulario
      
    }
  
    eliminarDonante2(indice:number):void{
      this.listEliminados.push(this.listDonante[indice]);
      this.listDonante.splice(indice, 1);
    
  
    }

    eliminarDonante(indice: number): void {
      const donanteEliminado = this.listDonante[indice];
      this.listEliminados.push(donanteEliminado);
      this.listDonante.splice(indice, 1);
      this.totalEliminados += donanteEliminado.valorDonar;
    }
    
  
    actualizarDonante(donante:donante, indice:number){
      console.log(donante);
      this.listDonante[indice].estado=!donante.estado;
  
    }
    getFormattedDate(date: Date): string {
      if (date) {
        return new Date(date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
      return '';
    }


}
