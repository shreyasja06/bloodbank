import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
public valid:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {
    return this.valid=true;
  }

}
