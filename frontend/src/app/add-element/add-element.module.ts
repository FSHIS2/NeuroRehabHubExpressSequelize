import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddElementPageRoutingModule } from './add-element-routing.module';

import { AddElementPage } from './add-element.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddElementPageRoutingModule
  ],
  declarations: [AddElementPage]
})
export class AddElementPageModule {}
