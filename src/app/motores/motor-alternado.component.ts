import { EventEmitter, Output } from '@angular/core';
import { Component } from "@angular/core";

@Component({
    selector: 'app-motores',
    templateUrl: './motor-alternado.component.html',
    styleUrls: ['./motor-alternado.component.scss']
})

export class MotorAlternadoComponent{

  @Output() aoAddmotor = new EventEmitter<any>();

  fabricante: string;
  modelo: string;
  corrent: Text;
  tensao: Text;
  potencia: Text;
  rpm: Text;
  grau: Text;
  ipin: Text;
  rendimento: Text;
  rolamento: Text;

  add(){
    console.log('Novo motor cadastrado');
    //console.log('Fabricante: ', this.fabricante);
    //console.log('Modelo: ', this.modelo);
    const addMotores = {
      fabricante: this.fabricante,
      modelo: this.modelo,
      corrent: this.corrent,
      tensao: this.tensao,
      potencia: this.potencia,
      rpm: this.rpm,
      grau: this.grau,
      ipin: this.ipin,
      rendimento: this.rendimento,
      rolamento: this.rolamento
    };

    this.aoAddmotor.emit(addMotores);
    this.limparCampo();
  }

  limparCampo(){
    this.fabricante = "";
    this.modelo = "";
  }
}
