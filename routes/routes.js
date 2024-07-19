function routes(app) {
  const nodemailer = require("nodemailer");
  require("dotenv").config();
  const mongodb = require("mongodb");
  const MongoClient = mongodb.MongoClient;
  const url = process.env.API_URL;
  const client = new MongoClient(url);
  const db = client.db("kojsowiocki-angular");
  app.get("/timeline", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getTimeline() {
      try {
        const timelineColl = db.collection("timeline");
        const timeline = timelineColl.find({});
        const results = await timeline.toArray();
        if (results) {
          res.json(results);
        } else {
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
    getTimeline();
  });
  app.get("/achievements", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getAchievements() {
      try {
        const users = db.collection("achievements");
        const achievements = users.find({});
        const results = await achievements.toArray();
        if (results) {
          res.json(results);
        } else {
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
    getAchievements();
  });

  app.post("/email", (req, res) => {
    const { name, email, text } = req.body;
    let config = {
      service: "gmail",
      auth: {
        user: process.env.NODEJS_GMAIL_APP_USER,
        pass: process.env.NODEJS_GMAIL_APP_PASSWORD,
      },
    };
    let transporter = nodemailer.createTransport(config);

    let message = {
      from: email,
      to: "kontakt@kojsowiocki.ct8.pl",
      subject: `zapytanie od ${name} EMAIL : ${email}`,
      text,
    };

    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          info: "successed",
        });
      })
      .catch((err) => {
        res.end();
        console.error(err);
      });
  });
  app.get("/achievements/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getAchievement() {
      try {
        const id = req.params["id"];
        const users = db.collection("achievements");
        const achievements = users.find({ _id: new mongodb.ObjectId(id) });
        const results = await achievements.toArray();
        if (results) {
          res.json(results[0]);
        } else {
          return;
        }
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getAchievement();
  });
  app.get("/timeline/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getOneTimeline() {
      try {
        const id = req.params["id"];
        const timeline = db.collection("timeline");
        const oneTimeline = timeline.find({ _id: new mongodb.ObjectId(id) });
        const results = await oneTimeline.toArray();
        if (results) {
          res.json(results[0]);
        }
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getOneTimeline();
  });
  app.get("/news", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getNews() {
      try {
        const users = db.collection("news");
        const news = users.find({});
        const results = await news.toArray();
        if (results) {
          res.json(results);
        } else {
          return;
        }
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getNews();
  });
  app.get("/news/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getOneNews() {
      try {
        const id = req.params["id"];
        const users = db.collection("news");
        const news = users.find({ _id: new mongodb.ObjectId(id) });
        const results = await news.toArray();
        if (results) {
          res.json(results[0]);
        } else {
          return;
        }
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getOneNews();
  });
  app.patch("/timetable", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getTimetable() {
      try {
        const body = req.body;
        const timetable = db.collection("timetable");
        timetable.updateOne(
          { title: body[0].title },
          {
            $set: {
              title: body[0].title,
              content: body[0].content,
              date: body[0].date,
            },
          }
        );
        timetable.updateOne(
          { title: body[1].title },
          {
            $set: {
              title: body[1].title,
              content: body[1].content,
              date: body[1].date,
            },
          }
        );
        res.json("send");
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getTimetable();
  });
  app.get("/timetable", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function getTimetable() {
      try {
        const timetable = db.collection("timetable");
        const timetableColl = timetable.find({});
        const results = await timetableColl.toArray();
        if (results) {
          res.json(results);
        } else {
          return;
        }
      } catch (err) {
        res.end();
        console.error(err);
      }
    }
    getTimetable();
  });
  app.post("/achievement", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function postAchievemnt() {
      try {
        const trophy = await req.body;
        const achievements = db.collection("achievements");
        await achievements.insertOne(trophy);
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    postAchievemnt();
  });
  app.post("/news", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function postNews() {
      try {
        const body = await req.body;
        const news = db.collection("news");
        await news.insertOne(body);
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    postNews();
  });
  app.delete("/achievement/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function deleteAchievemnt() {
      try {
        const achievements = db.collection("achievements");
        const id = await req.params;
        await achievements.deleteOne({ _id: new mongodb.ObjectId(id) });
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    deleteAchievemnt();
  });
  app.delete("/news/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function deleteAchievemnt() {
      try {
        const news = db.collection("news");
        const id = await req.params;
        await news.deleteOne({ _id: new mongodb.ObjectId(id) });
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    deleteAchievemnt();
  });
  app.patch("/achievement/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function patchAchievemnt() {
      try {
        const achievements = db.collection("achievements");
        const id = await req.params;
        const body = await req.body;
        await achievements.updateOne(
          { _id: new mongodb.ObjectId(id) },
          {
            $set: {
              title: body.title,
              src: body.src,
            },
          }
        );
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    patchAchievemnt();
  });
  app.patch("/news/:id", (req, res) => {
    res.set("Access-Control-Allow-Origin", "https://kojsowiocki.ct8.pl");
    async function patchNews() {
      try {
        const news = db.collection("news");
        const id = await req.params;
        const body = await req.body;
        await news.updateOne(
          { _id: new mongodb.ObjectId(id) },
          {
            $set: {
              title: body.title,
              src: body.src,
              srcDetails: body.srcDetails,
              content: body.content,
              contentDetails: body.contentDetails,
            },
          }
        );
      } catch (err) {
        res.end();
        console.error(err);
      } finally {
        res.end();
      }
    }
    patchNews();
  });
}

module.exports = routes;
