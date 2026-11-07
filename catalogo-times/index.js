import express from 'express';

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');


const times = [
    { id: 1, nome: "Grêmio", estadio: "Arena", cidade: "Porto Alegre" },
    { id: 2, nome: "Internacional", estadio: "Beira-Rio", cidade: "Porto Alegre" },
    { id: 3, nome: "Flamengo", estadio: "Maracanã", cidade: "Rio de Janeiro" }
];


app.get('/', (req, res) => {
    res.render('index', { titulo: "Catálogo de Times" });
});


app.get('/times', (req, res) => {
    res.render('times', { times });
});


app.get('/times/:id', (req, res) => {
    const id = Number(req.params.id); 
    const time = times.find(t => t.id === id);

    if (time) {
        res.render('detalhe', { time });
    } else {
        res.send('Time não encontrado!');
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});