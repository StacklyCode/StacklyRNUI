const fs = require("fs");
const path = require("path");

const origen = "./build/build";
const destino = "./build";

const moverArchivos = (origen, destino) => {
  const archivos = fs.readdirSync(origen);

  archivos.forEach((archivo) => {
    const origenPath = path.join(origen, archivo);
    const destinoPath = path.join(destino, archivo);

    if (fs.statSync(origenPath).isDirectory()) {
      // Si el archivo es una carpeta, creamos la carpeta en el destino y movemos su contenido
      fs.mkdirSync(destinoPath, { recursive: true });
      moverArchivos(origenPath, destinoPath);
    } else {
      // Si el archivo es un archivo, lo movemos directamente al destino
      fs.renameSync(origenPath, destinoPath);
      console.log(`El archivo ${archivo} ha sido movido exitosamente.`);
    }
  });
  const origenPath = path.join(origen);
  fs.rmSync(origenPath, { recursive: true, force: true });
};

moverArchivos(origen, destino);
