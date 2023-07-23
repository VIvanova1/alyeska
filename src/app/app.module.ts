import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { UserModule } from './user/user.module';
import { CompanyEventsModule } from './company-events/company-events.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    UserModule,
    AppRoutingModule,
    CompanyEventsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
