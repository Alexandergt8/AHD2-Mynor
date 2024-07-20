import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CoctelesService } from '../services/cocteles.service';
import { VodkaService } from '../services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [],
  providers: [VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {
  vodka: any[] = [];

  constructor(private vodkaServicio: VodkaService){}

  ngOnInit():void{
    this.vodkaServicio.obtenerVodka().subscribe(datos =>{
      this.vodka = datos.drinks;
    });
  } 

}
