const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8090;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var mascotas = [
    {id:1,nombre:"pepe trueno",foto:"https://cdn2.traveler.es/uploads/images/thumbs/es/trav/3/s/2019/39/gatos_463_940x705.jpg",tipo:"gato",edad:3, descripcion:"gruñon y juguetón"},
    {id:2,nombre:"chispita",foto:"https://www.ecestaticos.com/imagestatic/clipping/dfd/996/dfd996d0c22dd7e69412274972f5598d/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",tipo:"perro", edad: 5, descripcion:"se comporta muy bien"},
    {id:3,nombre:"rafael",foto:"https://www.anipedia.net/imagenes/tortuga-rusa.jpg",tipo:"tortuga", edad: 2, descripcion:"le encanta la lechuga y pasear por la casa (si, también le gusta la pizza)"},
    {id:4,nombre:"yogui",foto:"https://www.hogarmania.com/archivos/201505/perro-consejos-848x477x80xX.jpg",tipo:"perro", edad: 1, descripcion:"super activo, le gusta correr mucho"},
    {id:5,nombre:"piolin",foto:"http://animalesdelperu.com/wp-content/uploads/2018/11/guacamayo-rojo.png",tipo:"guacamaya", edad: 3, descripcion:"muy colorida, come frutas y ¡habla!"}
];

app.post('/mascotas', function (req, res) {
    let mascota = req.body;
    let ids = mascotas.map(elt => elt.id);
    mascota.id = Math.max(...ids) + 1;
    mascotas.push(mascota);
    res.status(201).json(mascota);
});

app.get('/mascotas', function (req, res) {
    res.status(200).json(mascotas);
});

app.get('/mascotas/:id', function (req, res) {
    res.status(200).json(mascotas.find(elt => elt.id == req.params.id));
});

app.put('/mascotas', function (req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.body.id);
    if(index >= 0)
        mascotas[index] = req.body;
    res.status(200).send();
});

app.delete('/mascotas/:id', function (req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.params.id);
    if(index >= 0)
        mascotas.splice(index,1);
    res.status(200).send();
});

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto "+port);
});