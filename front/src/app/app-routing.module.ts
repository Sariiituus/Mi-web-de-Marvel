import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { FilmsComponent } from './pages/films/films.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "films", component: FilmsComponent
  },
  {
    path: "gestion", component: GestionComponent
  },
  {
    path: "", pathMatch: "full", component: HomeComponent                                                            
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
