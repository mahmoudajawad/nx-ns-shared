import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { CoreModule } from '../../core/core.module';

import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from './home.component';
import { HomePageContainer } from './home.container';

export const routes: Routes = [
  {
    path: '',
    component: HomePageContainer
  }
];

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [
    HomePageContainer,
    HomePageComponent,
  ],
  exports: [
    HomePageContainer,
    HomePageComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
