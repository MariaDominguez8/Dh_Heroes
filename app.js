const express = require('express');
const app = express();
const port = 3030 ; 
const path = require('path');

app.get('/', (req,res)=> res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/personajes.html', (req,res)=> res.sendFile(path.join(__dirname,'views','personajes.html')));
app.get('/nosotros.html', (req,res)=> res.sendFile(path.join(__dirname,'views','nosotros.html')));
app.get('/contacto.html', (req,res)=> res.sendFile(path.join(__dirname,'views','contacto.html')));
app.get('/akkuman.html', (req,res)=> res.sendFile(path.join(__dirname,'views','akkuman.html')));
app.get('/androide8.html', (req,res)=> res.sendFile(path.join(__dirname,'views','androide8.html')));
app.get('/androide16.html', (req,res)=> res.sendFile(path.join(__dirname,'views','androide16.html')));
app.get('/androide17.html', (req,res)=> res.sendFile(path.join(__dirname,'views','androide17.html')));
app.get('/androide18.html', (req,res)=> res.sendFile(path.join(__dirname,'views','androide18.html')));
app.get('/androide19.html', (req,res)=> res.sendFile(path.join(__dirname,'views','androide19.html')));
app.get('/badidi.html', (req,res)=> res.sendFile(path.join(__dirname,'views','badidi.html')));
app.get('/bardock.html', (req,res)=> res.sendFile(path.join(__dirname,'views','bardock.html')));
app.get('/beerus.html', (req,res)=> res.sendFile(path.join(__dirname,'views','beerus.html')));
app.get('/bra.html', (req,res)=> res.sendFile(path.join(__dirname,'views','bra.html')));
app.get('/bulma.html', (req,res)=> res.sendFile(path.join(__dirname,'views','bulma.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));
app.get('/.html', (req,res)=> res.sendFile(path.join(__dirname,'views','.html')));


app.use(express.static('public')) ;
app.listen(port,() => console.log(`Servidor corriendo en http://localhost:${port}`))
