import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ["africa", "america", "asia", "europe", "oceania"];
  regionActiva: string = "";

  paises: Country[] = [];
  termino: string="";
  hayError: boolean = false;
  
  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClassCss(region: string)
  {
    return (region === this.regionActiva) ? "btn btn-primary" : "btn btn-outline-primary";
  }

  activarRegion(region: string): void
  {
    if(region === this.regionActiva) {return};

    this.regionActiva = region;

    this.buscar(region);

  } 

  buscar(terminoO:string)
  {
    this.hayError = false;
    //console.log(this.termino);
    this.termino = terminoO;
    this.paisService.buscarRegion(this.termino).subscribe(paises => 
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
