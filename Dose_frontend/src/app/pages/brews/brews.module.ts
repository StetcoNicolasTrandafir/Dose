import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrewsPageRoutingModule } from './brews-routing.module';

import { BrewsPage } from './brews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrewsPageRoutingModule
  ],
  declarations: [BrewsPage]
})
export class BrewsPageModule {}
