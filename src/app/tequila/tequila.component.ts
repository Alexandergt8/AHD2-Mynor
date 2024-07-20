import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent {
tequila: any [] = [];

constructor(private tequilaServicio: TequilaService){}

ngOnInit():void{
  this.tequilaServicio.obtenerTequila().subscribe(datos =>{
    this.tequila = datos.drinks;
  });
} 


}
