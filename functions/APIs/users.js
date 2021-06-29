// require("dotenv").config();
// const {admin, db} = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const {OAuth2Client} = require("google-auth-library");
// const {credential} = require("firebase-admin");
const clientId =
"468491144903-2c68uj6cbo2uh96d2i7ld08gfp2k0t36.apps.googleusercontent.com";
const client = new OAuth2Client(clientId);
firebase.initializeApp(config);
exports.signUpUser = (request, response) => {
  // HTTP function to supports CORS requests
  // (Allow requests to server from client with diffrent origins)
  // {{change this in production to only bootcampaf domain}}
  response.set("Access-Control-Allow-Origin", "*");
  if (request.method === "OPTIONS") {
    // Send response to OPTIONS requests
    response.set("Access-Control-Allow-Methods", "POST");
    response.set("Access-Control-Allow-Headers", "Content-Type");
    response.set("Access-Control-Max-Age", "3600");
    response.status(204).send("");
  } else {
    // Function body
    const {token} = request.body;
    console.log(token);
    client.verifyIdToken({
      idToken: token,
      audience: clientId,
    }).then((res) => {
      // const {name, email, picture} = res.getPayload();
      console.log(res);
      console.log(res.getPayload());
    });
  }
};
