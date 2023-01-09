import axios from "axios";

export const SendMail =  async ({ 
    nombre, 
    apellidos, 
    correo, 
    mensaje, 
    setSend
}) => {
    try{
        const data = {nombre, apellidos, correo, mensaje};
        let res = await axios.post("http://localhost:5000/enviar", data);
        if(res){
            setSend(res.data);
        }
    }
    catch(err){
        alert(err.response.data.message);       
    }

}

//COMING SOON...
/* 
    export const sendOrder
    Dashboard + user validation
*/