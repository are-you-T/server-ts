import { NextFunction, Request, Response, Router } from "express";
import { BoardService } from "../services/board.service";

export class BoardController {
  router: Router;
  test: number;
  constructor(private readonly boardService: BoardService) {
    this.boardService = boardService;
    this.test = 0;
    this.router = Router();
    // this.router.get("/test", (req, res) => {
    //   console.log(this.test);
    //   this.test++;
    //   res.send({ result: this.test });
    // });
    // this.router.get("/:id", this.getBoard);
    this.router.post("/", this.postBoard);
    // this.router.patch("/:id", this.patchBoard);
    // this.router.delete("/:id", this.deleteBoard);
  }

  // getBoard = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;
  //     if (!id) {
  //       return next();
  //     }

  //     const result = await this.boardService.getBoard(id);
  //     res.status(200).json(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  postBoard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { uuid, category, content, like, dislike } = req.body;
      console.log({ uuid, category, content, like, dislike });
      await this.boardService.postBoard({
        uuid,
        category,
        content,
        like,
        dislike,
      });

      res.status(201).json({ result: "success" });
    } catch (error) {
      next(error);
    }
  };
  // patchBoard = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;
  //     const { totalQty, boardItems } = req.body;
  //     await this.boardService.patchBoard(id, totalQty, boardItems);
  //     res.status(200).json({ result: "success" });
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  // deleteBoard = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { id } = req.params;

  //     await this.boardService.deleteBoard(id);
  //     res.status(200).json({ result: "success" });
  //   } catch (error) {
  //     next();
  //   }
  // };
}
