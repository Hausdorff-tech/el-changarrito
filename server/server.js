import  Express  from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { EmailReceiver} from "./sendEmail.js";
import { FormReceiver } from "./sendProductReq.js";
import { ItemReceiver } from "./sendItemBought.js";


dotenv.config();

const app = Express();
const port = process.env.CONTACT_PORT ||5000;

app.use(Express.json())
app.use(cors({origin:`${process.env.CLIENT_URL}`}));

// SENDING API
app.post("/enviar", async (req, res) => {
   try{
      const {nombre, apellidos, correo, mensaje} = req.body;
      EmailReceiver({nombre, apellidos, correo, mensaje});
      res.json({msg:"El mensaje se envió con éxito"});
   }
   catch(error){
      res.status(404).json({msg:"Error ❌"});
   }
});

app.post("/encargar", async (req, res) => {
   try{
      const {nombre, apellidos, correo, celular, producto} = req.body;
      FormReceiver({nombre, apellidos, correo, celular, producto});
      res.json({msg:"El producto se ha encargado con éxito"});

   }
   catch(err){
      res.status(404).json({msg:"Error ❌"});
   }
});

app.post("/comprar", async(req, res) => {
   try{
      const { img, producto, descripcion, talla, cantidad, precio } = req.body;
      ItemReceiver({img, producto, descripcion, talla, cantidad, precio});
      res.json({msg:"El producto se ha enviado con éxito"});

   }  
   catch(e){
      res.status(404).json({msg:"La compra no se ha realizado"});
   }
})


 app.listen(port, () => {
    console.log("Example app listening on port: ", port);
 })
