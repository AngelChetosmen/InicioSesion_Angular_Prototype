import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EnviarCorreoComponent } from './enviar-correo/enviar-correo.component'; // Asegúrate de importar correctamente
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EnviarCorreoComponent // Asegúrate de declarar el componente aquí
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
