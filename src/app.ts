import express, { Express, Router } from "express";
import dotenv from "dotenv";
import { BoardController } from "./controllers/board.controller";
import { BoardService } from "./services/board.service";
import { BoardRepository } from "./repositories/board.repository";
import { PrismaClient } from "@prisma/client";
import { errorHandler } from "./error-handler";
import mongoose from "mongoose";
import { BoardModel } from "./models/board.model";
import { IBoardItem, BoardItemSchema } from "./models/board.schema";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const mongodbConnection = mongoose.createConnection(process.env.MONGODB_URI);
const boardModel = new BoardModel<IBoardItem>(
  mongodbConnection,
  BoardItemSchema
);
const prismaClient = new PrismaClient();
const boardRepository = new BoardRepository(prismaClient);
const boardService = new BoardService(boardModel);
const boardController = new BoardController(boardService);

const router = Router();
router.use("/boards", boardController.router);

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
