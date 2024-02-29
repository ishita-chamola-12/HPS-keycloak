import { Component } from '@angular/core';
import { Appointment} from '../entities/appointment';
import { FormsModule,ReactiveFormsModule,FormBuilder, Validators ,FormGroup,FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service'
import { DoctorService } from'../services/doctor.service'
import { PatientService } from '../services/patient.service'
import { Doctor } from '../entities/doctor';
import { Patient } from '../entities/patient';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css',
  standalone:true,
  imports:[FormsModule]
})
export class AddAppointmentComponent {

appointment :Appointment =new Appointment();
appointments:Appointment[];
doctors:Doctor[];
patients:Patient[];

constructor(private appointmentService:AppointmentService, private doctorService:DoctorService,
private patientService:PatientService, private router : Router )
{
}

ngOnInit(): void{

this.loadDoctors();
this.loadPatients();

// form = new FormGroup({
//     dname: new FormControl('', Validators.required),
//     pname: new FormControl('', Validators.required),
//     date: new FormControl('', Validators.required),
//     time: new FormControl('', Validators.required),
//     location: new FormControl('', Validators.required),
//
//
// });

}

loadDoctors():void{
this.doctorService.getDoctorList().subscribe(data=>{
this.doctors=data})
}

loadPatients():void{
this.patientService.getPatientList().subscribe(data=>{
this.patients=data})
}

saveAppointment(){
console.log(this.appointment.doctor);
this.appointmentService.addAppointment(this.appointment).subscribe((response: Appointment)=>
{

this.goToAppointmentList();},
error=>console.log(error));
}

goToAppointmentList(){

this.router.navigate(['/appointments'])

}
onSubmit(){
this.saveAppointment();

}
}
