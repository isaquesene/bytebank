import { Component, Input, OnInit } from '@angular/core';
import { MotoresService } from '../services/motores.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{

  motoress: any[];

  constructor(private service: MotoresService){}

  ngOnInit() {
    this.motoress = this.service.motoress;
  }


}
