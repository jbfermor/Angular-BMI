import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExecFileSyncOptionsWithBufferEncoding } from 'child_process';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    this.resultado = '';
    this.interpretacion = '';
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if(this.bmi > 25){
      this.resultado = "Exceso de peso";
      this.interpretacion = "Tienes un peso corporal supoerior al normal. Intente hacer un poco de ejercicio";
    }
    else if (this.bmi >= 18.5){
      this.resultado = "Normal";
      this.interpretacion = "Tienes un peso corporal normal. ¡Buen trabajo!";     
    }
    else {
      this.resultado = "Bajo peso";
      this.interpretacion = "Tienes un peso corporal por debajo de lo normal. Tienes que comer un poco más.";
    }
  }

}
