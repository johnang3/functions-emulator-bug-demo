const functions = require("firebase-functions");

exports.a = functions.https.onRequest((request, response) => {
    response.status(200).send("Function A called!");
});

exports.b = functions.https.onRequest((request, response) => {
    response.status(200).send("Function B called!");
});