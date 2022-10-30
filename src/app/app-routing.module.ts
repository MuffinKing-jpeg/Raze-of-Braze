import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PlaceholderComponent} from "./components/placeholder/placeholder.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: PlaceholderComponent},
  {path: 'login', component: PlaceholderComponent},
  {path: 'admin', component: PlaceholderComponent},

  //Default route
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //404 route
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
