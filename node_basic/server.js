const express = require("express");
const app = express();

const server = app.listen(5000, () => {
  console.log(`start Server : localhost:5000`);
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  //   res.send("hello world");
  res.render("index.html");
});

app.get("/about", function (req, res) {
  //   res.send("about page");
  res.render("about.html");
});

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "my_node",
});

app.get("/db", function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query("SELECT * FROM test", function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log("result ", results);
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
});
