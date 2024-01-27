//const express = require('express');
import express from 'express';
import { producto } from './routes/apiProductos.js'

const app = express();

//middlewares 

app.use(express.json());


const port = 4000;

app.use('/api/producto', producto);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);
});