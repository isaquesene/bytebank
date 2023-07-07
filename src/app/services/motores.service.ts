import { Motoress } from './../../models/motores.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoresService {

  private listaMotores: any[];

  private url = 'http://localhost:3000/motoress';

constructor(private httClient: HttpClient) {
  this.listaMotores = [];
}

get motoress(){
  return this.listaMotores;
}

todas(): Observable<Motoress[]>{
  return this.httClient.get<Motoress[]>(this.url);
}

addM(motores: Motoress): Observable<Motoress>{
  this.hidratar(motores);
  //this.listaMotores.push(motores);
  return this.httClient.post<Motoress>(this.url, motores);
}

private hidratar(motores: any){
  motores.data = new Date();
}

}
