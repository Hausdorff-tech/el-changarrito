const ProductosTienda = [
    {
        id:"1",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"XL",
        img:"../images/tshirt1.jpeg",
        precio:165
    },
    {
        id:"2",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"L",
        img:"./images/tshirt2.jpg",
        precio:172
    },
    {
        id:"3",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"L",
        img:"./images/tshirt3.jpg",
        precio:200
    },
    { 
        id:"4",
        producto:"Camiseta",
        descripcion:"Camiseta para hombre",
        talla:"S",
        img:"./images/tshirt4.jpeg",
        precio:185
    },
    {
        id:"5",
        producto:"Gafas de sol",
        descripcion:"Gafas de sol color rojo",
        talla:"Unisex",
        img:"./images/tshirt4.jpeg",
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