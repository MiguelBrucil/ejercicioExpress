const express = require ('express');
const app = express();
app.use(express.json());

var lista=[{
    id:'1',
    nombre:'Miguel'
},
{
    id:'2',
    nombre:'David'
}];

//USO DE APP
//WEB SERVICE DE TIPO GET
//estructura de servicio web aser un nombre es una cadena
app.get('/nombre',(req,res)=>{
    res.json(lista);

});
app.get('/Miguel',(req,res)=>{

res.send('Mi nombre es Miguel, estudiante de 5to de desarrollo de software del ist17J ');
});

app.get('/suma',(req,res)=>{
let n1=12;
let n2=14;
let suma = n1+n2;
res.send(suma+'');

});

app.get('/sumar/:n1',(req, res)=>{
    //obtiene el dato
    let num1 = parseInt(req.params.n1);
    let num2=3;
    let suma = num1+num2;
   // res.send('El resultado de la suma es: '+suma);
    res.send(' '+suma);
});

app.get('/cuadrado/:n1', (req, res) => {
    const num1 = parseFloat(req.params.n1);
    const perimetro = 4 * num1; 
    const area = num1 * num1; 
    
    res.send('El perímetro del cuadrado es: ' + perimetro + ' y el área es: ' + area);
});

app.get('/pentagono/:lado/:apotema', (req, res) => {
    const lado = parseFloat(req.params.lado); 
    const apotema = parseFloat(req.params.apotema); 

    const perimetro = 5 * lado;

    const area = (perimetro * apotema) / 2;

    res.send('El perímetro del pentágono es: ' + perimetro + ' y el área es: ' + area);
});
app.get('/hexagono/:lado/:apotema', (req, res) => {
    const lado = parseFloat(req.params.lado); 
    const apotema = parseFloat(req.params.apotema); 

    const perimetro = 6 * lado;

    const area = (perimetro * apotema) / 2;
    res.send('El perímetro del hexágono es: ' + perimetro + ' y el área es: ' + area);
});

app.get('/trinomio/:a/:b/:c', (req, res) => {
    // Obtener los parámetros de la URL
    let a = parseInt(req.params.a); 
    let b = parseInt(req.params.b); 
    let c = parseInt(req.params.c);

   
    if (b * b === 4 * a * c) {
       
        let p = b / (2 * a);
       
        let factor = `(${a}x + ${p})²`;
        res.send('Respuesta de un cuadrado perfecto: ' + factor);
    } else {
        res.send('El trinomio ' + a + 'x² + ' + b + 'x + ' + c + ' NO es un cuadrado perfecto.');
    }
});
app.get('/trinomioN/:a/:b/:c', (req, res) => {
    // Obtener los parámetros de la URL
    let a = parseInt(req.params.a); 
    let b = parseInt(req.params.b); 
    let c = parseInt(req.params.c);

    // Verificar si es un cuadrado perfecto con b negativo predeterminado
    if (b === -2 * Math.sqrt(a * c)) {
        let p = Math.sqrt(c);
        let factor = `(${a}x - ${p})²`;
        res.send('Respuesta de un cuadrado perfecto: ' + factor);
    } else {
        res.send('El trinomio ' + a + 'x² ' + (b < 0 ? '- ' : '+ ') + Math.abs(b) + 'x + ' + c + ' NO es un cuadrado perfecto.');
    }
});


app.listen(3002,()=>{
    console.log('Se levanto el servicio en el puerto 3002')
});
