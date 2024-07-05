const fs = require("fs");

function getAllPeliculas() {
  const peliculas = fs.readFileSync("pelis.json");
  return JSON.parse(peliculas);
}

function getPropiedad(propiedad) {
  if (propiedad == 'title' || propiedad == 'rating') {
    const peliculas = JSON.parse(fs.readFileSync("pelis.json"));
    const ordenado1 = [];
    const ordenado3 = [];
    for (let i = 0; i < peliculas.length; i++) {
      ordenado1.push(peliculas[i].title);
    }
    const ordenado2 = ordenado1.sort();
    for (let i = 0; i < peliculas.length; i++) {
      for (let j = 0; j < peliculas.length; j++) {
        if (ordenado2[i] == peliculas[j].title) {
          ordenado3.push(peliculas[j]);
        }
      }
    }
  }else{
    return "La propiedad ingresada es invalida, favor de utilizar title o rating."
  }
  return ordenado3;
}

function getPorNombre(palabra) {
  const peliculas = JSON.parse(fs.readFileSync("pelis.json"));
  const palabraConMayuscula = (palabra.charAt(0).toUpperCase() + palabra.slice(1));
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].title.indexOf(palabraConMayuscula) != -1) {
      return peliculas[i];
    }
  }
}

function getPorTag(tag) {
  const peliculas = JSON.parse(fs.readFileSync("pelis.json"));
  const tagMinuscula = tag.toLowerCase();
  const pelis = [];
  for (let i = 0; i < peliculas.length; i++) {
    for (let j = 0; j < peliculas[i].tags.length; j++) {
      if (peliculas[i].tags[j] == tagMinuscula) {
        pelis.push(peliculas[i]);
      }
    } 
  }
  return pelis;
}

module.exports = { getAllPeliculas, getPropiedad, getPorNombre, getPorTag };
