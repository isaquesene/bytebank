import { Component, Input, OnInit } from '@angular/core';
import { MotoresService } from '../services/motores.service';
import { Motoress } from 'src/models/motores.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{

  motoress: any[];

  constructor(private service: MotoresService){}

  ngOnInit() {
    this.service.todas().subscribe((motoress: Motoress[]) => {
      console.log(motoress);
      this.motoress = motoress;
    })
  }


}
