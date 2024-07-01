import { Component } from '@angular/core';

@Component({
  selector: 'app-enviar-correo',
  templateUrl: './enviar-correo.component.html',
  styleUrls: ['./enviar-correo.component.css']
})
export class EnviarCorreoComponent {
  correo = {
    destinatario: '',
    asunto: '',
    contenido: ''
  };

  enviarCorreo() {
    console.log('Correo a enviar:', this.correo);
    // Aquí puedes implementar la lógica para enviar el correo utilizando tu servicio de Node.js
  }
}
