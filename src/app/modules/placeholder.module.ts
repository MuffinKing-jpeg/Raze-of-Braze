import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PlaceholderComponent} from "../components/placeholder/placeholder.component";



const routes: Routes = [
  {
    path: '',
    component: PlaceholderComponent
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PlaceholderModule { }
