import { Doctor } from './doctor'
import { Hospital } from './hospital';
import { Patient } from './patient'

// this holds response of rest api
export class Appointment {
appointmentId:number;
doctor:Doctor;
patient:Patient;
hospital:Hospital;
date:string;
time:string;
}
