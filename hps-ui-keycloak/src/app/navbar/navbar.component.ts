import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { RegisterService } from '../register.service';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class NavbarComponent {

constructor(private storageService:StorageService){ }
ngOnInit(): void{
}
}
