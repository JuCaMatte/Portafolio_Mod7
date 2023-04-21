import { Router } from 'express';
const router = Router()

import producto from producto.models.js;

// Set up the routes
app.get('/', async (req, res) => {
  const products = await producto.findAll();
  res.render('index', { products });
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.render('product', { product });
});

app.post('/products', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  const product = await Product.create({ name, description, price, imageUrl });
  res.redirect(`/products/${product.id}`);
});

app.put('/products/:id', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  await Product.update({ name, description, price, imageUrl }, { where: { id: req.params.id } });
  res.redirect(`/products/${req.params.id}`);
});

app.delete('/products/:id', async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});