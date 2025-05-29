import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "shabooli",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();

const allowedFields = ["id", "first_name", "last_name", "email", "phone"];
const allowedDirections = ["ASC", "DESC"];

const parseSortParam = (sortParam) => {
  if (!sortParam) return null;

  const [column, direction = "ASC"] = sortParam.trim().split(/\s+/);
  const dir = direction.toUpperCase();

  const isValid =
    allowedFields.includes(column) && allowedDirections.includes(dir);
  return isValid ? [column, dir] : null;
};
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const sort = parseSortParam(req.query.sort);
  if (sort) {
    const [column, dir] = sort;
    query = query.orderBy(column, dir);
  } else if (req.query.sort) {
    return res
      .status(400)
      .json({ error: "Invalid sort format. Use: ?sort=first_name ASC" });
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
