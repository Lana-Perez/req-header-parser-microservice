// init project

const requestIp = require("request-ip");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//  API endpoint
app.get("/api/whoami", (req, res) => {
  console.log(
    req.headers["user-agent"],
    req.headers["accept-language"],
    requestIp.getClientIp(req)
  );

  res.json({
    ipaddress: requestIp.getClientIp(req),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// listen for requests
app.listen(PORT, () => {
  console.log("Your app is listening on port " + PORT);
});
