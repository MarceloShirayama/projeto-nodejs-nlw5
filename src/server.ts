import express from 'express';

const app = express();

app.get('/', (req, res) => {
    // return res.send('<h1>Olá NLW5!!!</h1>');
    return res.json({ message: 'Olá NLW5!!!'});
});

app.post('/', (req, res) => {
    return res.json({ message: 'Usuário cadastrado com sucesso'})
});

app.listen(3333, () => console.log('listening on http://localhost:3333'));
