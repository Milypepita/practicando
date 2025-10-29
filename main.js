const prompt = require ("prompt-sync")()

async function obtenerdatos(){
    let fecha = prompt("ingrese la fecha (aaaa-mm-dd): ")
    let respuesta = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${fecha}/v1/currencies/eur.json`)
    let data = await respuesta.json()
    console.log("la cotizacion de esa fecha fue :"+ data.eur.ars)
}

obtenerdatos()