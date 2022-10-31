// src/app.js
const express = require('express');
const app = express();

app.use(express.json());

const OK = 200;
const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// exemplo de rota
app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));
app.get('/primeirarota', (req, res) => res.status(OK).send('<h1>Olá está é minha nova rota!</h1>'));
app.get('/segundarota', (req, res) => res.status(OK).render('index.html'));
app.get('/terceirarota', (req, res) => res.end('Olá, para a terceira rota!'));
app.get('/quartarota', (req, res) => res.status(200).redirect('https://www.betrybe.com/'));

// criando um api para times de futebol
// GET lê todos os times
app.get('/teams', (req, res) => res.status(OK).json({ teams }));
// GET lê um time específico
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  res.status(OK).json({ team });
});

// POST cria um novo time
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(CREATED).json({ team: newTeam });
});
// PUT atualiza um time 
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(NOT_FOUND).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(OK).json({ updateTeam });
});

// DELETE deleta um time
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayIndex = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayIndex, 1);
  res.status(OK).end();
});

module.exports = app;