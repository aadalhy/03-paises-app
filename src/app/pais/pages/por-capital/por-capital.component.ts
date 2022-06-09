import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

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
    
    this.termino = terminoO;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe(paises => 
      {
        //console.log(paises);
        this.paises =paises;
      }, 
      (error) => {
        //this.hayError = true;
        if (this.termino.length === 0)
        {
          this.hayError = false;
        }
        else
        {
          this.hayError = true;
        }
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
        if (this.termino.length === 0)
        {
          this.hayError = false;
        }
        else
        {
          this.hayError = true;
        }
        
        this.paisesSugeridos = [];
      }
    );
    //console.log(termino);
    
  }
}
