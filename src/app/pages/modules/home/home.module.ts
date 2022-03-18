import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { HomeRoutingModule } from './home-routing.module';

//components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
