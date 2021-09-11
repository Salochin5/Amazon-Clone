const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
 "sk_test_51JGEanEqMseiMjRaUcVXjWTdtu095ZqInn3xxB0Ns0oZ2Q3Y2KPM9ylDopifk19BT7RJIysDLwcoihagcIscnMyf00NedeonNG"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
 const total = request.query.total;

 console.log("Payment Request Received Bool!!! for this amount >>>", total);

 const paymentIntent = await stripe.paymentIntents.create({
  amount: total, //subunits of the currency
  currency: "usd",
 });

 //OK - Created
 response.status(201).send({
  clientSecret: paymentIntent.client_secret,
 });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-3fd00/us-central1/api
