import { IRepository } from "../interfaces/database.interface";
import { BoardItemDto } from "../dto/boardItem.dto";

export interface UpdateBoardItemDto {
  boardItemId: string;
  qty: number;
}

export class BoardService {
  constructor(private readonly boardRepository: IRepository) {
    this.boardRepository = boardRepository;
  }

  // async getBoard(id: string) {
  //   const board = await this.boardRepository.findOneById(id);
  //   if (board?._id) {
  //     const { _id, ...restBoard } = board;
  //     return {
  //       id: _id,
  //       ...restBoard,
  //     };
  //   }
  //   return board;
  // }

  async postBoard(boardItem: BoardItemDto) {
    console.log("service");
    console.log(boardItem);
    await this.boardRepository.createOne(boardItem);
  }

  // async patchBoard(
  //   id: string,
  //   totalQty: number,
  //   boardItems: UpdateBoardItemDto[]
  // ) {
  //   await this.boardRepository.updateOne(id, totalQty, boardItems[0]);
  // }

  // async deleteBoard(id: string) {
  //   await this.boardRepository.deleteOne(id);
  // }
}
