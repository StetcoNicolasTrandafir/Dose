import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoffeeTypesPageRoutingModule } from './coffee-types-routing.module';

import { CoffeeTypesPage } from './coffee-types.page';
import { CoffeTypeCardComponent } from 'src/app/components/coffe-type-card/coffe-type-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoffeeTypesPageRoutingModule,
    
  ],
  declarations: [CoffeeTypesPage, CoffeTypeCardComponent]
})
export class CoffeeTypesPageModule {}
