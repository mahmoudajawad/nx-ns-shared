import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DataDriverService } from './data-driver.service';

import { DataModule } from '@nx-ns-shared/data';

const Pages = [];
const PagesComponents = [];
const PagesModules = [];

@NgModule({
  declarations: [
    AppComponent,

    ...Pages,
    ...PagesComponents,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full', },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule), },
    ], { initialNavigation: 'enabled' }),
    
    DataModule,
    ...PagesModules,
  ],
  providers: [
    {
      provide: 'DataDriver',
      useClass: DataDriverService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
