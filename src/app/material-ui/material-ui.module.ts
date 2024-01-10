import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  exports: [
    MatSliderModule,
    MatFormFieldModule,
  ]
})
export class MaterialUiModule { }
