const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

//iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

const Product = mongoose.model('Product');



//primeira rota '/' raiz
app.get('/', (req, res) => {
Product.create({
  title: 'React Native',
  description:'Build native apps with React',
  url: 'http://github.com/facebook/react-native'
});

  return res.send('Oi Diego');
});

app.listen(3001);