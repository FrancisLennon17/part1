import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { booksRouter } from "./books/books.router";
import { authorsRouter } from "./books/authors.router";

dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 7000;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1", booksRouter);
app.use("/api/v1/authors", authorsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

