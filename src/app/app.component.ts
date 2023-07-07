import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  /* fabricante: Text;
  modelo: Text;
  corrent: Text;
  tensao: Text;
  potencia: Text;
  rpm: Text;
  grau: Text;
  ipin: Text;
  rendimento: Text;
  rolamento: Text; */

  motoress: any[] = [];

  add($event){
    console.log($event);
    const motores = {...$event, data: new Date()};
    this.motoress.push(motores);
  }
}
