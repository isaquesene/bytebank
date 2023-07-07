import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Component } from "@angular/core";
import { Motoress } from 'src/models/motores.model';
import { MotoresService } from '../services/motores.service';

@Component({
    selector: 'app-motores',
    templateUrl: './motor-alternado.component.html',
    styleUrls: ['./motor-alternado.component.scss']
})

export class MotorAlternadoComponent{

  @Output() aoAddmotor = new EventEmitter<any>();

  fabricante: string;
  modelo: string;
  corrent: string;
  tensao: string;
  potencia: string;
  rpm: string;
  grau: string;
  ipin: string;
  rendimento: string;
  rolamento: string;

  constructor(private service: MotoresService){}

  add(){
    console.log('Novo motor cadastrado');
    //console.log('Fabricante: ', this.fabricante);
    //console.log('Modelo: ', this.modelo);
    const addMotores: Motoress = {
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

    //this.aoAddmotor.emit(addMotores);

    this.service.addM(addMotores).subscribe(resultado => {
      console.log(resultado);
      this.limparCampo();
    },
    (error) => console.error(error)
    );

    //this.limparCampo();
  }

  limparCampo(){
    this.fabricante = "";
    this.modelo = "";
    this.corrent = "";
    this.tensao = "";
    this.potencia = "";
    this.rpm = "";
    this.grau = "";
    this.ipin = "";
    this.rendimento = "";
    this.rolamento = "";
  }
}
