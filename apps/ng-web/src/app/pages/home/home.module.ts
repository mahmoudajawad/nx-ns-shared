import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.component';
import { HomePageContainer } from './home.container';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full', },
      { path: 'home', component: HomePageContainer, },
    ]),
  ],
  exports: [],
  declarations: [
    HomePageContainer,
    HomePageComponent,
  ],
  providers: [],
})
export class HomePageModule { }
