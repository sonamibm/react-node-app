// server/index.js
const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
 });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});