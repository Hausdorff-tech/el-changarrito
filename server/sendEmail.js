import nodemailer from "nodemailer";

const Email = (options) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USERNAME, //user or email
            pass: process.env.PASSWORD //password
        }
    })

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

//  SEND EMAIL
const EmailSender = ({ nombre, apellidos, correo, mensaje }) => {
    const options = {
        from: `El changarrito shop 🛍️`,
        to: process.env.SEND_TO,
        subject: "Anuncio de El changarrito shop 🛍️",
        html: `               
    <!-- NAVBAR-->    
    <div style="bakground-color:#000000;">
            <img src="cid:elchangarrito.png" alt ="El changarrito logo" style="width:100%; height:100%;">
    </div>
    <h1>La mejor oferta en ropa</h1>
    <h2>¿Alguna vez te has abrumado buscando tus prendas favoritas?</h2>
    <p>En nuestra tienda ya no sucederá más. Encargá tu ropa o accesorios favoritos
        a precios accesibles.
    </p>
    <h4>Atentamente, Dieldrich Tuckler </h4>
        `,
        attachments:[{
            filename:"elchangarrito.png",
            path:"elchangarrito.png",
            cid:"elchangarrito.png"
        }]
    }
    Email(options);
}

const EmailReceiver = ({nombre, apellidos, correo, mensaje}) => {
    let options = {
        from:"¡Un nuevo usuario!",
        to: process.env.SEND_TO,
        subject:"¡Nuevo mensaje de la tienda!",
        html:`
        <div> 
            <h1>Hola Dieldrich,</h1>
             <h3>parece que has recibido un nuevo mensaje</h3>
            <p>Nombre de la persona: ${nombre} </p>
            <p>Apellidos de la persona: ${apellidos} </p>
            <p>Dirección de correo que dejó: ${correo} </p>
            <p>Mensaje: ${mensaje} </p>
        </div>
        `
    };
    Email(options);
}

export { EmailSender, EmailReceiver };