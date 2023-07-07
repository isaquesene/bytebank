import { Component } from '@angular/core';
import { MotoresService } from './services/motores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  //motoress: any[] = [];

  constructor(private service: MotoresService){

  }


  add($event){
    this.service.addM($event);

  }
}
