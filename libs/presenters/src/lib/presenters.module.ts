import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';

import { DataModule } from '@nx-ns-shared/data';

@NgModule({
  imports: [
    CommonModule,

    DataModule,
  ],
  providers: [
    HomeService,
  ]
})
export class PresentersModule {}
