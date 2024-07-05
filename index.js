const { getAllPeliculas, getPropiedad, getPorNombre, getPorTag } = require("./pelis.js");

function main() {
  const entrada = process.argv.slice(2);
  if (entrada.length == 0) {
    console.log(getAllPeliculas());
  } else if (entrada[0].startsWith("--")) {
    const sinGuion = entrada[0].slice(2);
    switch (sinGuion.toLocaleLowerCase()) {
      case "sort":
        console.log(getPropiedad(entrada[1]));
        break;
      case "search":
        console.log(getPorNombre(entrada[1]));
        break;
      case "tag":
        console.log(getPorTag(entrada[1]));
        break;
      default:
        console.log("El comando ingresado es invalido, favor de utilizar: --sort, --search o --tag");
        break;
    }
  }
}

main();
