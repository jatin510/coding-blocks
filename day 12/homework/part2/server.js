const express = require("express");
const app = express();

const { db, Lists } = require("./database/db");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use("/todo-list", express.static(__dirname + "/public"));

app.post("/add-item", async (req, res) => {
  let newItem = await Lists.create({
    name: req.body.name,
    description: req.body.description
  });

  res.send(newItem);
});

app.post("/toggle-done", async (req, res) => {
  console.log("toggle");

  let checkDone = await Lists.findOne({
    where: {
      id: req.body.id
    }
  });

  if (checkDone == 1) checkDone = 0;
  else checkDone = 1;

  await Lists.update(
    {
      done: checkDone
    },
    {
      where: {
        id: req.body.id
      }
    }
  );
});

app.post("/delete-item", async (req, res) => {
  console.log(req.body.id);

  let doneClause = {};

  if (req.body.done) {
    whereClause.done = req.body.done === "true";
  }

  await Lists.destroy({
    where: {
      id: req.body.id,
      done: true
    }
  });

  // let tasks = await Lists.findAll();
  // res.send(tasks)
});

app.get("/list", async (req, res) => {
  let tasks = await Lists.findAll();

  res.send(tasks);
});

db.sync()
  .then(() => {
    app.listen(5200, () => {
      console.log("server started on 5200");
    });
  })
  .catch(err => {
    console.log(err);
  });
