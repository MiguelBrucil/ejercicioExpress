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
app.get('/perimetro/:figura/:n1/:n2?', (req, res) => {
    const { figura, n1, n2 } = req.params;
    const num1 = parseFloat(n1);
    const num2 = n2 ? parseFloat(n2) : null; // Si n2 es opcional

    if (isNaN(num1) || (n2 && isNaN(num2))) {
        return res.status(400).json({ error: 'Los parámetros deben ser números válidos.' });
    }

    let resultado = {};

    switch (figura.toLowerCase()) {
        case 'cuadrado':
            // Perímetro: 4 * lado, Área: lado^2
            resultado.perimetro = 4 * num1;
            resultado.area = Math.pow(num1, 2);
            break;

        case 'triangulo':
                // Triángulo equilátero: Perímetro: 3 * lado, Área: (sqrt(3) / 4) * lado^2
                resultado.perimetro = 3 * num1;
                resultado.area = (Math.sqrt(3) / 4) * Math.pow(num1, 2);
                break;
        case 'heptagono':
                // Perímetro: 7 * lado, Área: 7 * lado^2 / (4 * tan(π / 7))
                const lado = num1;
                const angulo = Math.PI / 7;
                resultado.perimetro = 7 * lado;
                resultado.area = (7 * Math.pow(lado, 2)) / (4 * Math.tan(angulo));
                break;
        

        default:
           
    }

    // Responder con el resultado
    res.json({
        figura: figura,
        parametros: { n1: num1, n2: num2 },
        resultados: resultado
    });
});


app.listen(3002,()=>{
    console.log('Se levanto el servicio en el puerto 3002')
});
