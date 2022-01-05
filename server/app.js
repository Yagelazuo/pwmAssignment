const express = require("express");
const { ITEMS } = require("./items");
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get("/api/items", async (req, res) => {
  try {
    res.json(ITEMS);
  } catch (e) {
    console.log(e);
    throw e;
  }
});

app.listen(port, async () => {
  console.log(`server started at on ${port}`);
});
