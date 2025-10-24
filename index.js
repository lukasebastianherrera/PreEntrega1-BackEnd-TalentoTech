const metodo = process.argv[2];
const parametro = process.argv[3];
if(metodo.toUpperCase()  == "GET" && parametro.toLowerCase() == "products"){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
} else if(metodo.toUpperCase()  === "POST"){
    console.log(`Recibimos ${parametro} Satisfactoriamente`);
} else if(metodo.toUpperCase()  == "PUT"){
    console.log(`Modificamos el item con id: ${parametro} satisfactoriamente`);
} else if(metodo.toUpperCase()  == "DELETE"){
    console.log(`El item con el id: ${parametro} se eliminó con éxito`)
}

console.log("ss")
