const express = require('express');

const app = express();
const port = 8000;

app.get('/me', (req, res) => {
    res.status(200).json({name: 'Antonio', age: 25, country: 'México', verb: req.method});
});

app.post('/metas', (req, res) => {
    res.status(200).json([{ hobbie1: 'Salir a acampar'}, {hobbie2: 'jugar videojuegos'}, {hobbie3: 'Salir a correr'}, {verb: req.method}]);
});

app.patch('/metas', (req, res) => {
    res.status(200).json([{metas1:'Dominar Javascript a nivel avanzado'},{metas2:'Obtener las habilidades de Full Stack'},{verb: req.method}]);
});

app.put('/business', (req, res) => {
    res.status(200).json([{company1:'SW Sapien'}, {company2:'Treinta'}, {company3:'Globant'},{verb: req.method}])
});

app.listen(port, () => {
    console.log(`Server started at port  ${port}`);
});