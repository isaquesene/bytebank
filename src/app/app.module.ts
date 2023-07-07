import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MotorAlternadoComponent } from './motores/motor-alternado.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    MotorAlternadoComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
