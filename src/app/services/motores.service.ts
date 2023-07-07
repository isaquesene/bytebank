import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotoresService {

  private listaMotores: any[];


constructor() {
  this.listaMotores = [];
}

get motoress(){
  return this.listaMotores;
}

addM(motores: any){
  this.hidratar(motores);
  this.listaMotores.push(motores);
}

private hidratar(motores: any){
  motores.data = new Date();
}

}
