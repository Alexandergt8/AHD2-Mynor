import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterLink, RouterOutlet],
  providers: [],
  templateUrl:  './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
}
