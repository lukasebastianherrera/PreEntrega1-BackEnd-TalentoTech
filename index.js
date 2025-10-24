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
// METODO POST
if(metodo.toUpperCase()  == "POST" && parametro.toLowerCase() == "products"){
    const titulo = process.argv[4];
    const precio = process.argv[5];
    const categoria = process.argv[6];
    const product = { title: `${titulo}`, price: `${precio}`, category: `${categoria}` };
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
})
    .then(response => response.json())
    .then(data => console.log(data));
} 
if(metodo.toUpperCase()  == "DELETE"){
    console.log(`El item con el id: ${parametro} se eliminó con éxito`)
}

