const express = require('express');
const stripe = require('stripe')('sk_test_51NmMFgKoDtYYgFZ6FytavdgckfeAogUvdJrpkfOSCljp7IqbY8Rhjm00DG0cBrF0e8oeUOXnHF9g8SUUDNGQ8M1100t6oIV0OE');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' package
const app = express();
app.use(bodyParser.json());
// Enable CORS for all routes by using the cors middleware
app.use(cors());

app.post('/api/create-checkout-session', async (req, res) => {
  
  try {
    const { products } = req.body; // Assuming req.body.products is an array of products
    const lineItems = products.map((product) => {
      return {
        price_data: {
          currency: 'pkr',
          product_data: {
            name: product.name, // Use the product name
            // images: []
          },
          unit_amount: product.price * 100, // Convert price to cents
        },
        quantity: product.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems, // Use the line items array
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000/cart',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Checkout session:', error);
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});