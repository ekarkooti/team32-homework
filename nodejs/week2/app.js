import express from "express";
import fs from "fs/promises";

const app = express();
const port = process.env.PORT || 3000;

const filePath = "documents.json";
const data = await fs.readFile(filePath, "utf8");

// Support parsing JSON requests
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//helper functions

function searchContent(jsonContentString, targetString) {
  const contentToSearch = JSON.parse(jsonContentString);
  //   return contentToSearch.includes(targetString);
  for (const item of jsonContentString) {
    return item;
    console.log(item);
    if (item.includes(targetString)) {
      return item;
    } else {
      return "string not found";
    }
  }
}

//the routes

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const contentToSearch = JSON.parse(data);
  const searchString = req.query.q;

  const results = contentToSearch.filter((obj) =>
    Object.values(obj).some((value) =>
      String(value).toLowerCase().includes(searchString.toLowerCase())
    )
  );

  res.send(results);
});

app.get("/documents/:id", (req, res) => {
  const contentToSearch = JSON.parse(data);
  const searchString = req.query.q;

  const result = contentToSearch.find(
    (obj) => obj.id === Number(req.params.id)
  );

  if (result) {
    console.log("Matching object:", result);
    res.send(result);
  } else {
    console.log(`No object found with id = ${req.params.id}`);
    res.status(404).send({ error: "Document not found" });
  }
});

app.post("/search", (req, res) => {
  const contentToSearch = JSON.parse(data);
  const searchString = req.query.q;
  const fields = req.body.fields;

  if (searchString && fields) {
    return res.status(400).send({ error: "Cannot use both 'q' and 'fields'." });
  }

  let results = [];

  if (searchString) {
    const search = searchString.toLowerCase();
    results = contentToSearch.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(search)
      )
    );
  }

  if (fields) {
    results = contentToSearch.filter((item) => {
      for (let key in fields) {
        if (String(item[key]) !== String(fields[key])) {
          return false;
        }
      }
      return true;
    });
  }

  res.send(results);
});
