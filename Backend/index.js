const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configura el transportador de Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tuCorreo@gmail.com',
        pass: 'tuContraseña'
    }
});

// Endpoint para enviar correos electrónicos
app.post('/enviar-correo', async (req, res) => {
    const { destinatario, asunto, contenido } = req.body;

    try {
        let info = await transporter.sendMail({
            from: 'tuCorreo@gmail.com',
            to: destinatario,
            subject: asunto,
            html: contenido
        });
        res.status(200).send({ message: 'Correo enviado', messageId: info.messageId });
    } catch (error) {
        res.status(500).send({ error: 'Error al enviar el correo', details: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
