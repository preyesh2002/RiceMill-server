const express = require('express')
const cors = require('cors')
require('./db/server')
const User = require('./db/User')
const Product = require('./db/Product')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
  let user = new User(req.body)
  let result = await user.save()
  res.send(result)
})

app.post('/Login', async (req, res) => {
  console.log(req.body)
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select('-password')
    if (user) {
      res.send(user)
    } else {
      res.send({ result: 'no user' })
    }
  } else {
    res.send({ result: 'no user' })
  }
})

app.post('/add-product', async (req, res) => {
  let product = new Product(req.body)
  let result = await product.save()
  res.send(result)
})
app.get('/products', async (req, res) => {
  try {
    const data = await Product.find({}, { _id: 0 }); // Exclude _id from the response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5000)
