import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { DataDriverService } from './data-driver.service';

import { PresentersModule } from '@nx-ns-shared/presenters';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
  
    PresentersModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: 'DataDriver',
      useClass: DataDriverService,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
