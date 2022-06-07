import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    // otra forma de hacerlo
    //  this.activatedRoute.params.pipe(switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
    //    tap(console.log)).subscribe(pais => {this.pais = pais;});
      
    this.activatedRoute.params.subscribe(({id}) => {
      this.paisService.getPaisPorCodigo(id).subscribe(pais => {
        this.pais = pais;
        console.log(this.pais);
      });
    });
  }

}

