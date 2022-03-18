import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from './../shared/shared.module';

//components
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
