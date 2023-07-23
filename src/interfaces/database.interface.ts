import { BoardDto } from "../dto/board.dto";
import { BoardItemDto } from "../dto/boardItem.dto";
import { UpdateBoardItemDto } from "../services/board.service";

export interface IRepository {
  // findOneById(id: string): Promise<BoardDto | null>;
  createOne(boardItem: BoardItemDto): Promise<void>;
  // updateOne(
  //   id: string,
  //   totalQty: number,
  //   boardItems: UpdateBoardItemDto
  // ): Promise<void>;
  // deleteOne(id: string): Promise<void>;
}
