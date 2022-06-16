import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Angular lit les routes du haut vers le bas donc il faut faire attention à l'ordre des paths
const routes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },    // '' représente une route vide
  { path: '**', component: PageNotFoundComponent }  // ** permet d'intercepter tous les routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
