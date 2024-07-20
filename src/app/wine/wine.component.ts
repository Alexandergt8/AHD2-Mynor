import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [],
  providers: [WineService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent {
wine: any [] = [];

constructor(private wineServicio: WineService){}

ngOnInit():void{
  this.wineServicio.obtenerWine().subscribe(datos =>{
    this.wine = datos.drinks;
  });
} 

}
