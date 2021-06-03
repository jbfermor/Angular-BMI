import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo = "masculino"

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = "masculino";
  }

  femenino() {
    this.sexo = "femenino";
  }

  calcular() {
    const bmi = this.peso/Math.pow(this.altura/100,2);
    this.router.navigate(['/resultado', bmi.toFixed(1)]);
  }


}
