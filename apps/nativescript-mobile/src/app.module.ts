import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { DataDriverService } from './data-driver.service';
import { HomePageModule } from './pages/home/home.module';
import { DataModule } from '@nx-ns-shared/data';

const Pages = [];
const PagesComponents = [];
const PagesModules = [];

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
  
    DataModule,
    ...PagesModules,
  ],
  declarations: [
    AppComponent,
    ...Pages,
    ...PagesComponents,
  ],
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
