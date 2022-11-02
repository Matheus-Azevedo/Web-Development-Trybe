// Modules imports
const express = require('express');
const { getChocolate, getBrands }= require('./cacauTrybe');
// Resources declarations
const app = express();
const OK = 200;
const NOT_FOUND = 404;

app.use(express.json());

// Routes
// GET /chocolate
app.get('/chocolates', async (req, res) => {
  const chocolates = await getChocolate();
  res.status(OK).json(chocolates);
});
// GET /chocolate/:id
app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolates = await getChocolate();
  const chocolate = chocolates.find((chocolate) => chocolate.id === Number(id));
  if (!chocolate) return res.status(NOT_FOUND).json({ message: 'Chocolate not found' });
  res.status(OK).json(chocolate);
});
// GET /brands
app.get('/brands', async (req, res) => {
  const brands = await getBrands();
  res.status(OK).json(brands);
});
// GET /brands/:id
app.get('/brands/:id', async (req, res) => {
  const { id } = req.params;
  const brands = await getBrands();
  const brand = brands.find((brand) => brand.id === Number(id));
  if (!brand) return res.status(NOT_FOUND).json({ message: 'Brand not found' });
  res.status(OK).json(brand);
});

module.exports = app;
