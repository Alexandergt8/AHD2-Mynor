import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MargaritaComponent } from './margarita/margarita.component';
import { VodkaComponent } from './vodka/vodka.component';
import { TequilaComponent } from './tequila/tequila.component';
import { WineComponent } from './wine/wine.component';

export const routes: Routes = [
{ path: 'margarita', component: MargaritaComponent },
{ path: 'vodka', component: VodkaComponent },
{ path: 'tequila', component: TequilaComponent },
{ path: 'wine', component: WineComponent },

];





