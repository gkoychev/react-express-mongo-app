const express = require("express");

const initRoutes = require("./routes");

const app = express();
const port = process.env.PORT || "8000";

initRoutes(app);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
