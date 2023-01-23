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
            setSend(res.data); //It will return the success message
            //console.log(res);
        }
    }
    catch(err){
        alert(err.response.data.message);       
    }

}

//COMING SOON...
    export const sendOrder = async ({
        nombre,
        apellidos,
        correo,
        celular,
        producto,
        setOrder
    }) => {
        try{
            const data = {nombre, apellidos, correo, celular, producto};
            let res = await axios.post("http://localhost:5000/encargar", data);
            if(res){ //If the order was sent...
                setOrder(res.data); //It will return the success message
                //console.log(res);
            }
        }
        catch(err){
            alert(err.response.data.message);
        }
    }

//COMING SOON...
/*
    Dashboard + user validation
*/