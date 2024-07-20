import { Component, OnInit } from '@angular/core';
import { MargaritaService } from '../services/margarita.service';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent{
  margarita: any[] = [];

  constructor(private margaritaServicio: MargaritaService){}

  ngOnInit():void{
    this.margaritaServicio.obtenerMargarita().subscribe(datos =>{
      this.margarita = datos.drinks;
    });
  } 
}
