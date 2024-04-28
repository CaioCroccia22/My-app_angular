import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Para expor a classe para outros arquivos -> export
import { HellocomponentComponent } from './hellocomponent/hellocomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    // Para expor a classe para outros arquivos
    HellocomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
