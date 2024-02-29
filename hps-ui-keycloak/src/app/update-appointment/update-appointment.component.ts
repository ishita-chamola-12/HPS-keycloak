import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { AppointmentService } from '../services/appointment.service';
import { DoctorService } from'../services/doctor.service'
import { PatientService } from '../services/patient.service'
import { Router } from '@angular/router';
import { Doctor } from '../entities/doctor';
import { Patient } from '../entities/patient';
import { Appointment } from '../entities/appointment';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.css',
  standalone:true,
  imports:[FormsModule]
})
export class UpdateAppointmentComponent {

app_id:number;
appointment:Appointment=new Appointment();
selectedDoctor:Doctor=new Doctor();
selectedPatient:Patient=new Patient();
doctors:Doctor[];
patients:Patient[];


constructor(private appointmentService:AppointmentService,private activatedRoute:ActivatedRoute,
private doctorService:DoctorService,private patientService:PatientService, private router : Router){}

ngOnInit(): void{

this.app_id=this.activatedRoute.snapshot.params['app_id'];

this.appointmentService.getAppointmentById(this.app_id).subscribe(data=>{
this.appointment=data;
}
);

this.loadDoctors();
this.loadPatients();
}

loadDoctors():void{
this.doctorService.getDoctorList().subscribe(data=>{
this.doctors=data});
}

loadPatients():void{
this.patientService.getPatientList().subscribe(data=>{
this.patients=data});
}
goToAppointmentList(){
this.router.navigate(['/appointments']);
}

onSubmit(){
console.log(this.appointment);
this.appointmentService.updateAppointment(this.app_id,this.appointment).subscribe(data=>{
console.log(data)
this.goToAppointmentList();

});
}
}
