const metodo = process.argv[2];
const parametro = process.argv[3];

// METODO GET
if(metodo.toUpperCase()  == "GET" && parametro.toLowerCase() == "products"){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
}
// METODO GET/id
if(metodo.toUpperCase()  === "GET" && parametro.startsWith("products/")){
    const separador = parametro.split("/");
    const [, id ] = separador;
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => console.log(data));

} 
if(metodo.toUpperCase()  == "PUT"){
    console.log(`Modificamos el item con id: ${parametro} satisfactoriamente`);
} 
if(metodo.toUpperCase()  == "DELETE"){
    console.log(`El item con el id: ${parametro} se eliminó con éxito`)
}

