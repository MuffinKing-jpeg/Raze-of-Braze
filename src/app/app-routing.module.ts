import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main-page.module')
        .then(m => m.MainPageModule)
  },
  {path: 'admin',loadChildren: () => import('./modules/placeholder.module')
    .then(m => m.PlaceholderModule)},

  //Default route
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //404 route
  {path: '404', loadChildren: () => import('./modules/not-found.module')
        .then(m => m.NotFoundModule)},
  {path: '**', loadChildren: () => import('./modules/not-found.module')
        .then(m => m.NotFoundModule),
    pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
