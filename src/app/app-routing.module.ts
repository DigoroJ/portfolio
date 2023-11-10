import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'',component:NavComponent},
  {path:'about',component:AboutComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'contacts', component:ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
