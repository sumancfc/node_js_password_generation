import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import createPassword from "./helpers/createPassword";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.post("/generate", (req: Request, res: Response) => {
  const { length, includeSymbols, includeNumbers, customSet } = req.body;
  const password = createPassword(
    length,
    includeSymbols,
    includeNumbers,
    customSet
  );
  res.json({ password });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
