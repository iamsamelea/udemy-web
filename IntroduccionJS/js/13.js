// UNIR OBJETOS CON SPREED OPERATOR

const producto = {  
    nombreProducto: "Monitor HD 20\"",
    precio: 250,
    disponible: true
}

const medidas = {
    peso: "1kg",
    anchura: "1 metro"
}

const nuevoProducto = { ...producto, ...medidas}; //esta es la forma en la que juntamos objetos, con los ...objeto y una coma para ir uniendo

console.log(producto);
console.log(medidas);
console.log(nuevoProducto); // Aqui se monstrarán los dos objetos unidos