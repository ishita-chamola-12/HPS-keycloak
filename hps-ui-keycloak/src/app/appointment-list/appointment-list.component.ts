import { Component} from '@angular/core';
import { Appointment } from '../entities/appointment'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service'
import { Doctor } from '../entities/doctor';
import { Patient } from '../entities/patient';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { RegisterService } from '../register.service';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class AppointmentListComponent {


appointments:Appointment[];

constructor( private appointmentService : AppointmentService ,private router:Router){ }

ngOnInit(): void{
this.getAppointments();
}
private getAppointments(){
this.appointmentService.getAppointmentList().subscribe(data=>{
this.appointments=data});
}

deleteAppointment(appointmentId:number){
this.appointmentService.deleteAppointment(appointmentId).subscribe(()=>this.getAppointments());
}
updateAppointment(appointmentId:number){
this.router.navigate(['updateAppointment',appointmentId]);

}

}
