/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Nyv51B2OHHOlwPLSF8nflmuaUqW2pL9wl5XMT17R2UNg0y2bX0gj41Iej1MLCMuSreERQyVfTdPWFSmV2bUm8Y300NhbJbNiQ');

const app = express();

app.use(cors({
	origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'usd'
    });

    res
      .status(200)
      .send(paymentIntent.client_secret);

  } catch (err) {
    res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
})

app.get('*', (req, res) => {
	res
		.status(404)
		.send('404, Not Found.')
});

exports.api = functions.https.onRequest(app);