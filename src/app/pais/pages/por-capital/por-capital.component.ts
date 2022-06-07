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
  termino: string="";
  hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar(terminoO:string)
  {
    this.hayError = false;
    //console.log(this.termino);
    this.termino = terminoO;
    this.paisService.buscarCapital(this.termino).subscribe(paises => 
      {
        //console.log(paises);
        this.paises =paises;
      }, 
      (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
