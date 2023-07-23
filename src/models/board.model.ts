import mongoose, { Connection, Model, Schema, Types } from "mongoose";
import { IRepository } from "../interfaces/database.interface";
import { BoardDto } from "../dto/board.dto";
import { BoardItemDto } from "../dto/boardItem.dto";
import { UpdateBoardItemDto } from "../services/board.service";

export class BoardModel<T extends Document> implements IRepository {
  private boardModel: Model<T>;
  constructor(mongodbConnection: Connection, boardSchema: Schema<T>) {
    this.boardModel = mongodbConnection.model<T & Document>(
      "board",
      boardSchema
    );
  }

  // async findOneById(id: string): Promise<BoardDto | null> {
  //   return await this.boardModel
  //     .findOne(
  //       { _id: new Types.ObjectId(id) },
  //       { totalQty: 1, id: 1, deletedAt: 1 }
  //     )
  //     .lean();
  // }

  async createOne(boardItem: BoardItemDto): Promise<void> {
    await this.boardModel.create({ boardItem });
  }

  // async updateOne(
  //   id: string,
  //   totalQty: number,
  //   boardItems: UpdateBoardItemDto
  // ): Promise<void> {
  //   const exist_board = await this.boardModel
  //     .findOne({ _id: new Types.ObjectId(id) })
  //     .lean();

  //   await this.boardModel.updateOne(
  //     { _id: new Types.ObjectId(id) },
  //     {
  //       $set: {
  //         totalQty,
  //         boardItems: {
  //           qty: boardItems.qty,
  //         },
  //       },
  //     }
  //   );
  // }
  // async deleteOne(id: string): Promise<void> {
  //   await this.boardModel.updateOne(
  //     { _id: new Types.ObjectId(id) },
  //     {
  //       $set: {
  //         deletedAt: new Date(),
  //       },
  //     }
  //   );
  // }
}
