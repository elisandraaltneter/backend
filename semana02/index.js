const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Heróis</title>
        </head>
        <body>
            <h1>Catálogo de Heróis</h1>
            <p>Bem-vindo ao universo dos heróis da Marvel e da DC!</p>
            
            <h2>Empresas</h2>
            <ul>
                <li><a href="/marvel">Marvel</a></li>
                <li><a href="/dc">DC</a></li>
            </ul>

            <hr />

            <h2>Personagens Disponíveis</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Hulk">Hulk</a></li>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
            </ul>
        </body>
        </html>
    `);
});

app.get('/marvel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Marvel</title>
        </head>
        <body>
            <h1>Universo Marvel</h1>
            <p>A Marvel é uma das maiores editoras de quadrinhos do mundo, criadora de heróis icônicos.</p>
            
            <h2>Personagens:</h2>
            <ul>
                <li><a href="/personagem/marvel/Thor">Thor</a></li>
                <li><a href="/personagem/marvel/Hulk">Hulk</a></li>
                <li><a href="/personagem/marvel/HomemAranha">Homem-Aranha</a></li>
                <li><a href="/personagem/marvel/CapitaoAmerica">Capitão América</a></li>
            </ul>
            
            <br>
            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});

app.get('/dc', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>DC Comics</title>
        </head>
        <body>
            <h1>Universo DC</h1>
            <p>A DC Comics é a casa dos maiores super-heróis, como Superman e Batman.</p>
            
            <h2>Personagens:</h2>
            <ul>
                <li><a href="/personagem/dc/Batman">Batman</a></li>
                <li><a href="/personagem/dc/Superman">Superman</a></li>
                <li><a href="/personagem/dc/MulherMaravilha">Mulher-Maravilha</a></li>
                <li><a href="/personagem/dc/Flash">Flash</a></li>
            </ul>
            
            <br>
            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});


app.get('/personagem/:empresa/:nome', (req, res) => {
    const { empresa, nome } = req.params;

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Personagem</title>
        </head>
        <body>
            <h1>Detalhes do Personagem</h1>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Personagem:</strong> ${nome}</p>
            
            <br>
            <a href="/${empresa}">Voltar para a página da ${empresa}</a> | 
            <a href="/">Voltar para o início</a>
        </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});