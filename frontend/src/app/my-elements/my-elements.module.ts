import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyElementsPageRoutingModule } from './my-elements-routing.module';

import { MyElementsPage } from './my-elements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyElementsPageRoutingModule
  ],
  declarations: [MyElementsPage]
})
export class MyElementsPageModule {}
