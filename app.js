const express = require("express");
const app = express();
const routesApp = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require("cors");
const adminRoutes = require("./routes/admin-routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("server is listening");
});
const corsOptions = {
  origin: "https://kojsowiocki.ct8.pl",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
routesApp(app);
adminRoutes(app);
