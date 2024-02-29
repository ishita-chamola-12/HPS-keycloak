import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
// import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
// import { httpInterceptorProviders } from './http.interceptor';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptor } from './token-interceptor';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports:[FormsModule,RouterOutlet,HttpClientModule,NavbarComponent,AppointmentListComponent,HospitalHomeComponent]

})


export class AppComponent {
  title = 'hps-ui';

}
