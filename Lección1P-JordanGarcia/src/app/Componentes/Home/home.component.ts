


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formLogin: FormGroup;
  hidePassword:boolean   = true;
  loading: boolean = false;



  constructor(
    private fb: FormBuilder,
    private router: Router,


  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  onHome() {

    
      this.router.navigate(['paginas']);
      //this.router.navigate(['pages/odontologo']); // Redirigir a la página de dashboard o la que corresponda
   

    
  }
    
  
}
