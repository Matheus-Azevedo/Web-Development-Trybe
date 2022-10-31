// src/app.js
// Importing the express module
const express = require('express');
const app = express();
// Importing the readMovies function
const readMovies = require('./index');

// Criando o CRUD de filmes
// GET all movies
app.get('/movies', async (_req, res) => {
  const movies = await readMovies();
  res.status(200).json({ movies });
});
// GET movie by id
app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movie = movies.find((movie) => movie.id === Number(id));
  res.status(200).json({ movie });
});
// POST create a new movie
app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await readMovies();
  const newMovie = { id: movies.length + 1, movie, price };
  movies.push(newMovie);
  res.status(201).json({ movie: newMovie });
});
// PUT update a movie
app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readMovies();
  const updateMovie = movies.find((movie) => movie.id === Number(id));
  if (!updateMovie) {
    res.status(404).json({ message: 'Movie not found' });
  }
  updateMovie.movie = movie;
  updateMovie.price = price;
  res.status(200).json({ movie: updateMovie });
});
// DELETE delete a movie
app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movieIndex = movies.findIndex((movie) => movie.id === Number(id));
  if (movieIndex === -1) {
    res.status(404).json({ message: 'Movie not found' });
  }
  movies.splice(movieIndex, 1);
  res.status(200).json({ message: 'Movie deleted' });
});

module.exports = app;