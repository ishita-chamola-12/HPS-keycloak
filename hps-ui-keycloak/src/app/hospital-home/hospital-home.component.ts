import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from '../navbar/navbar.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';
import { RegisterService } from '../register.service';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';
// import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-hospital-home',
  templateUrl: './hospital-home.component.html',
  styleUrl: './hospital-home.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule,NavbarComponent,AppointmentListComponent,AddAppointmentComponent,UpdateAppointmentComponent]
})
export class HospitalHomeComponent{

constructor(){ }
ngOnInit(): void{

  // const isLoggedIn = this.keycloakService.isLoggedIn();
  // if (!isLoggedIn)
  //   this.keycloakService.login();

  // const userRoles = this.keycloakService.getUserRoles();


  // if (isLoggedIn){
  //    console.log("logged in");
  // }      

  

  

}

}
