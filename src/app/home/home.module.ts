import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MonumentsComponent } from '../components/monuments/monuments.component';
import { WalkComponent } from '../components/walk/walk.component';
import { TransportComponent } from '../components/transport/transport.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    MonumentsComponent,
    WalkComponent,
    TransportComponent
  ]
})
export class HomePageModule {}
