import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { Page404RoutingModule } from './page404-routing.module';

//components
import { Page404Component } from './page404.component';

@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    Page404RoutingModule
  ]
})
export class Page404Module { }
