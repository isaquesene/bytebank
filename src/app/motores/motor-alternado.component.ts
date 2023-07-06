import { EventEmitter, Output } from '@angular/core';
import { Component } from "@angular/core";

@Component({
    selector: 'app-motores',
    templateUrl: './motor-alternado.component.html',
    styleUrls: ['./motor-alternado.component.scss']
})

export class MotorAlternadoComponent{

  @Output() aoAddmotor = new EventEmitter<any>();

  fabricante: Text;
  modelo: Text;
  corrent: Text;
  tensao: Text;
  potencia: Text;
  rpm: Text;
  grau: Text;
  ipin: Text;
  rendimento: Text;
  rolamento: Text;


  addmotor(){
    console.log('Novo motor cadastrado');
    //console.log('Fabricante: ', this.fabricante);
    //console.log('Modelo: ', this.modelo);
    const addMotores = {
      Fabricante: this.fabricante,
      Modelo: this.modelo,
      corrent: this.corrent,
      Tensão: this.tensao,
      Potencia: this.potencia,
      RPM: this.rpm,
      Grau: this.grau,
      IP_IN: this.ipin,
      Rendimento: this.rendimento,
      Rolamento: this.rolamento
    }
    this.aoAddmotor.emit(addMotores);
  }
}
