import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent, 
    children: [
      {
        path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'notFound', loadChildren: () => import('./modules/page404/page404.module').then(m => m.Page404Module)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'notFound', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
