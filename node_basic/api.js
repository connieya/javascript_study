const express = require("express");
const app = express();
const uuidAPIKey = require("uuid-apikey");

const server = app.listen(3001, () => {
  console.log("Start Server : localhost :3001");
});

const key = {
  apiKey: "Q4MSR48-57GMMJJ-G0MHRGQ-J30XC1E",
  uuid: "b9299c11-29e1-4a4a-8029-1c4290c1d605",
};

app.get("/api/users/:apiKey/:type", async (req, res) => {
  //   res.send("connect.");
  let { apiKey, type } = req.params;
  if (!uuidAPIKey.isAPIKey(apiKey) && !uuidAPIKey.check(apiKey, key.apiKey)) {
    res.send("apikey is not valid");
    return;
  }

  if (type == "seoul") {
    let data = [
      { name: "홍길동", age: 21 },
      { name: "박건희", age: 29 },
    ];
    res.send(data);
  } else if (type == "jeju") {
    let data = [
      { name: "코니", age: 23 },
      { name: "길동", age: 24 },
    ];
    res.send(data);
  } else {
    res.send("type is not correct.");
  }
  console.log("type ", type);
  res.send("ok");
});

app.get("/api/sales/:apiKey/:type", async (req, res) => {
  //   res.send("connect.");
  let { type } = req.params;

  if (type == "2019") {
    let data = [
      { product: "냉장고", amount: 231311311 },
      { product: "반도체", amount: 132131131313 },
    ];
    res.send(data);
  } else if (type == "2020") {
    let data = [
      { product: "냉장고", amount: 23231312 },
      { product: "반도체", amount: 23232131 },
    ];
    res.send(data);
  } else {
    res.send("type is not correct.");
  }
  console.log("type ", type);
  res.send("ok");
});
