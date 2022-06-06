import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  paises: Country[] = [];
  termino: string="";
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar()
  {
    this.hayError = false;
    //console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(paises => 
      {
        //console.log(paises);
        this.paises = paises;
      }, 
      (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }
}
