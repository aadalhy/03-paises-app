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
  paisesSugeridos: Country[] = [];
  termino: string="";
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;


  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(terminoO:string)
  {
    this.hayError = false;
    this.mostrarSugerencias = false;
    //console.log(this.termino);
    this.termino = terminoO;
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

  sugerencias(termino: string)
  {
    this.hayError = false;
    this.mostrarSugerencias = true;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.paisesSugeridos = paises;
    }, 
      (error) => {
        if (this.termino.length > 0)
        {
          this.hayError = true;
        }
        else
        {
          this.hayError = false;
        }
        
        this.paisesSugeridos = [];
      }
    );
    //console.log(termino);
  }
}
