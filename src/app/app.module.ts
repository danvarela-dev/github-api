import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DataService } from './services/data/data.service';
import { AlertsService } from './services/alerts/alerts.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile/profile.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProfileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    AlertsService,
    UserService,
    DataService,
    ProfileService,
    AppErrorHandler
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
