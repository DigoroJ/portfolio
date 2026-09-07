import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  {path:'',component:NavComponent},
  {path:'photography',component:PhotographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
