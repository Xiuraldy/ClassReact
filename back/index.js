import express, { request } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  create,
  deleted,
  get,
  getList,
  getQuery,
  tables,
  update,
} from "./store.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({ status: "okis" });
});
app.get("/entity", (req, res) => res.send(tables));

app.get("/entity/:table", (req, res) => {
  if (Object.keys(req.query).length) {
    return res.send(getQuery(req.params.table, req.query));
  }
  res.send(getList(req.params.table));
});

app.post("/sign-in", (req, res, next) => {
  try {
    const users = getList("users");
    const user = users.find(
      (item) =>
        item.username === req.body.username &&
        item.password === req.body.password
    );
    if (!user) {
      return res.status(401).send({ message: "Credenciales inconrrectas" });
    }
    res.send({ ...user, password: undefined });
  } catch {
    next();
  }
});

app.post("/sign-up", (req, res, next) => {
  try {
    if (req.body.password !== req.body.passwordRepeat) {
      return res.status(400).send({ message: "Las contraseñas no coinciden" });
    }
    const users = getList("users");
    const user = users.find((item) => item.username === req.body.username);
    if (user) {
      return res
        .status(400)
        .send({ message: "Usuario ya existe carita contenta" });
    }
    res
      .status(201)
      .send(create("users", { ...req.body, passwordRepeat: undefined }));
  } catch {
    next();
  }
});

app.get("/entity/:table/:id", (req, res) => {
  try {
    const item = get(req.params.table, +req.params.id);
    res.send(item);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

app.post("/entity/:table", (req, res, next) => {
  try {
    if (Array.isArray(req.body)) {
      return res.send(req.body.map((body) => create(req.params.table, body)));
    }
    res.send(create(req.params.table, req.body));
  } catch {
    next();
  }
});

app.put("/entity/:table/:id", (req, res) => {
  try {
    res.send(update(req.params.table, +req.params.id, req.body));
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});

app.delete("/entity/:table/:id", (req, res) => {
  try {
    res.send(deleted(req.params.table, +req.params.id));
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
});
app.use((error, req, res) =>
  res.status(500).send({ message: "internal server error" })
);

app.listen(4000, () => {
  console.log("escuchando en el puerto 4mil:)");
});
