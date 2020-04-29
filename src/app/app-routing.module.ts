import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent} from './places/places.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [{path:'places',component:PlacesComponent},{path:'',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }