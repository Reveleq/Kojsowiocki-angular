function adminRoutes(app) {
  require("dotenv").config();
  const mongodb = require("mongodb");
  const MongoClient = mongodb.MongoClient;
  const url = process.env.API_URL;
  const client = new MongoClient(url);
  const db = client.db("kojsowiocki-angular");
  app.post("/admin", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function login() {
      try {
        const user = req.body;
        const users = db.collection("users");
        const data = users.find({
          username: user.username,
          password: user.password,
        });
        const results = await data.toArray();
        if (results.length > 0) {
          const token = String(Math.random());
          users.updateOne(
            { username: user.username, password: user.password },
            {
              $set: {
                username: user.username,
                password: user.password,
                token: token,
              },
            }
          );
          res.json([
            {
              username: user.username,
              token,
            },
          ]);
        } else {
          res.json([]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    login();
  });
  app.post("/cookies", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    async function checkCookies() {
      try {
        const user = req.body;
        const token = user["authCookie"];
        const username = user["username"];
        const users = db.collection("users");
        const data = users.find({
          username,
          token,
        });
        const results = await data.toArray();

        if (results.length > 0) {
          res.json(["success!"]);
        } else {
          res.json([]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    checkCookies();
  });
  app.post("/logout", (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    async function logout() {
      try {
        const user = req.body;
        const token = user["authCookie"];
        const username = user["username"];
        const users = db.collection("users");
        users.updateOne(
          {
            username,
            token,
          },
          {
            $set: {
              token: "",
            },
          }
        );
        res.json(["logout"]);
      } catch (err) {
        console.error(err);
      }
    }
    logout();
  });
}
module.exports = adminRoutes;
