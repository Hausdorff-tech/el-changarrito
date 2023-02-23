import nodemailer from "nodemailer";

const Item = options => {
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
    })
}

const ItemReceiver = ({img, producto, descripcion, talla, cantidad, precio}) =>{
    const options = {
        from:"¡Una nueva compra!",
        to:process.env.SEND_TO,
        subject:"¡Nueva compra realizada en el sitio!",
        html:`
        <div> 
            <h1>Hola Dieldrich,</h1>
             <h3>parece que has recibido una nueva compra, revisá tu banca en línea para confirmar el pago.</h3>
            <img src=${img} alt="Producto de ropa">
            <p><b>Producto:</b> ${producto} </p>
            <p><b>Descripción:</b> ${descripcion} </p>
            <p><b>Talla: </b> ${talla} </p>
            <p><b>Cantidad: </b> ${cantidad} </p>
            <p><b>Precio: </b> ${precio} </p>
        </div>
        `
    }
    
    Item(options);
}

export { ItemReceiver };