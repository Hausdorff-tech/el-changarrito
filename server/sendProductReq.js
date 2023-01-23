import nodemailer from "nodemailer";

const Form = (options) => {
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USERNAME,
            pass:process.env.PASSWORD
        }
    });
    
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
            return;
        }
    });
}

const FormReceiver = ({nombre, apellidos, correo, celular, producto}) => {
    let options = {
        from:"¡Un nuevo pedido!",
        to:process.env.SEND_TO,
        subject:"¡Nuevo pedido realizado en el sitio!",
        html:`
        <div> 
            <h1>Hola Dieldrich,</h1>
             <h3>parece que has recibido un nuevo pedido</h3>
            <p><b>Nombre:</b> ${nombre} </p>
            <p><b>Apellidos:</b> ${apellidos} </p>
            <p><b>Dirección de correo que dejó:</b> ${correo} </p>
            <p><b>Número de celular que dejó:</b> ${celular} </p>
            <p><b>Producto que solicitó:</b> ${producto} </p>
        </div>
        `
    };

    Form(options);
};

export { FormReceiver };