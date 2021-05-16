import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DataDriverService } from './data-driver.service';

import { PresentersModule } from '@nx-ns-shared/presenters';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    
    PresentersModule,
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
