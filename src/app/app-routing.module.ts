import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ViewComponent } from "./view/view.component";
import { MotorAlternadoComponent } from "./motores/motor-alternado.component";

export const routes: Routes = [
  {path: '', redirectTo: 'view', pathMatch: 'full'},
  {path: 'view', component: ViewComponent},
  {path: 'motor-alternado', component: MotorAlternadoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
