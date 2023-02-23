import IMAGES from "./images";
const ProductosTienda = [
    {
        id:"1",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"XL",
        img:IMAGES.tshirt1,
        precio:165
    },
    {
        id:"2",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"L",
        img:IMAGES.tshirt2,
        precio:172
    },
    {
        id:"3",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"L",
        img:IMAGES.tshirt3,
        precio:200
    },
    { 
        id:"4",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"S",
        img:IMAGES.tshirt4,
        precio:185
    },
    {
        id:"5",
        producto:"Gafas de sol",
        descripcion:"Gafas de sol color rojo",
        talla:"Unisex",
        img:IMAGES.gafas,
        precio:70
    }
];

function getProductData(id){
    let productData = ProductosTienda.find(product => product.id === id);
    if(productData === undefined){
        console.log("El producto no está registrado.");
        return undefined;
    }
    return productData;
}

export { ProductosTienda, getProductData};