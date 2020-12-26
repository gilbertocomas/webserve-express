const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "aplication/json" });

    let salida = {
        nombre: "Gilberto",
        apellidos: "Comas Beltre",
        edad: 34,
        url: req.url,
    };
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log("Escuchando el puerto 8080");
