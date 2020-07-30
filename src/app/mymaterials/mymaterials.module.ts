import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import { CalcuService } from '../calcu.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule
  ],

  exports:[MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,MatCardModule]
})
export class MymaterialsModule { }
