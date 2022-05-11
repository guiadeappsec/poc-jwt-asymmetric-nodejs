const fs = require("fs")
const jwt = require("jsonwebtoken") // npm install jsonwebtoken
const privateKEY = fs.readFileSync("./private.key", "utf8")
const publicKEY = fs.readFileSync("./public.key", "utf8")

/*
====================   JWT Signing =====================
*/
const payload = {
  data: "Data",
}
const issuer = "My Company"
const subject = "myuser@email.com"
const audience = "https://mycompany.com"

const signOptions = {
  issuer,
  subject,
  audience,
  expiresIn: "12h",
  algorithm: "RS256", // RSASSA [ "RS256", "RS384", "RS512" ]
}

const token = jwt.sign(payload, privateKEY, signOptions)
console.log("Token: " + token)

/*
====================   JWT Verify =====================
*/
const verifyOptions = {
  issuer,
  subject,
  audience,
  expiresIn: "12h",
  algorithm: ["RS256"],
}

const legit = jwt.verify(token, publicKEY, verifyOptions)
console.log("JWT verification result: " + JSON.stringify(legit))